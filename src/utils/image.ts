// TODO: 나중에 Jquery 제거, Typescript로 rewrite
// 원철 선배 , "유지보수하기 어렵게 코딩하는 방법: 평생 개발자로 먹고 살 수 있다" 이걸 실천하네


import $ from "jquery"
import { serverIP } from "./mainCore"

var slideIndex: number = 0
var showTime: number[] = [3000]
var on: number[] = [0]
var image_list = Array()

var server_image: string
var timestamp: number

var slidet: Array<NodeJS.Timeout> = Array()
var aj_timer: Array<NodeJS.Timeout> = Array()


export const showSlides = () => {
    console.log("on? A: "+on[0])
    console.log("on? B: "+on)
    if(on[0] != 0) {
        var i;

        var slides = document.getElementsByClassName("sliders");
        var img = document.getElementsByClassName("img");
        
        for(i = 0; i < slides.length; i++) {
            // slides[i].style.display = "none";
            slides[i].setAttribute("style", "display: none;")
        }
        slideIndex++;

        if(slideIndex > slides.length) {
            slideIndex = 1
        }    
        // slides[slideIndex-1].style.display = "block";
        slides[slideIndex-1].setAttribute("style", "display: block;")

        // TODO: 디버깅 용도임!
        console.log("slideIndex: "+ slideIndex)
        console.log("server_image: "+ server_image)
            
        $("#image_num").html(`${slideIndex} / ${server_image}`);
        

        // 이미지 리로드
        // var reload_img = img[slideIndex-1].getAttribute('src').split("?")[0];

        const r_img = img[slideIndex-1]
        const r_img_attribute = r_img.getAttribute("src")
        if (r_img_attribute != null) {
            var reload_img = r_img_attribute.split("?")[0]
        
            timestamp = new Date().getTime();
            $(img[slideIndex-1]).attr('src',`${reload_img}?${timestamp}`)

        }
        
        // 타이머
        const slides_name = slides[slideIndex-1].getAttribute('name')
        console.log("slides name : "+slides_name)
        if (slides_name != null) {
            if(slides_name != "none") {
                
                // type assertion : string -> number
                const slides_name_unknown = slides_name as unknown
                const slides_name_number = slides_name_unknown as number;
                console.log(slides_name_number)

                slidet[2] = setTimeout(showSlides, slides_name_number);
            } else {
                if(slides[slideIndex-1].getAttribute('id') == "movie") { 
                    // img[slideIndex-1].onloadedmetadata = function() {
                    //     setTimeout(showSlides, (img[slideIndex-1].duration)*1000);
                    // };

                    // type assertion : HTMLCollectionOf -> HTMLVideoElement
                    var videoUnknown = img[slideIndex-1]
                    var videoElement: HTMLVideoElement = videoUnknown as HTMLVideoElement
                    console.log(videoElement)
                    
                    videoElement.addEventListener("onloadedmetadata", function() {
                        console.log(videoElement.duration)
                        setTimeout(showSlides, (videoElement.duration)*1000);
                    })
                    videoElement.play()
                }
                // console.log("slide showTime B: "+showTime[0])
                // slidet[1] = setTimeout(showSlides, showTime[0]);
            }
            console.log("slide showTime A: "+showTime[0])
            slidet[0] = setTimeout(showSlides, showTime[0]);
        }
    }
}

const aj_time = () => {
    $.ajax({
        url: `http://${serverIP}:2019/api/timer`,
        success: function(res) {
            if(isNaN(res)) {
                showTime[0] = (3000);
                console.log("AJ Time A: " + showTime[0])
            } else {
                showTime[0] = (res);
                console.log("AJ Time B: " + showTime[0])
            }
        }
    });
    setTimeout(aj_time, 10000);
}

export function aj_image() {    
    $.ajax({
        url: `http://${serverIP}:2019/api/image`,
        success: function(res) {
            if(res != image_list) {

                image_list = res;
                
                $('.mySlides').remove();
                
                var image = JSON.parse(res);
                
                if(image[0] == null) {
                    $(".numbertext").html("서버와 연결에 성공했지만 불러올 이미지가 없습니다.");
                    return;
                } else {
                    server_image = image.length;
                    timestamp = new Date().getTime();
                    for(var i in image) {
                        var name = "none";
                        if(image[i].indexOf("!") != -1) {
                            var _t = image[i].split(".")[0].split("!");
                            if(!isNaN(_t[1])) {
                                name = _t[1];
                            }
                        }
                        var event;
                        
                        var d = image[i].split(".")[image[i].split(".").length-1];
                        console.log("file-type: "+ d)
                        if(d == "avi" || d == "AVI" || d == "mp4" || d == "MP4" || d == "mov" || d == "MOV") {
                            event =`<div class="sliders fade" id="movie" name="none"><video class="img" src="http://${serverIP}:2019/images/${image[i]}" style="width:100%"></video></div>`
                        } else {
                            console.log(on[0])
                            event =`<div class="sliders fade" name="${name}"><img class="img" src="http://${serverIP}:2019/images/${image[i]}?${timestamp}" style="width:100%"></div>`
                        }
                        $('.image_container').append(event);
                    }
                    console.log(on[0])
                    if(on[0]==0) {
                        on[0] = 1;
                    }
                }
                terminate(slidet);
                showSlides()
            }
        }
    });
    aj_timer[0] = setTimeout(aj_image, 1000);
}


export const terminate = (source: Array<NodeJS.Timeout>) => {
    let i
    for (i = 0; i < source.length; i++) {
        clearTimeout(source[i])
    }
}

export const stop = () => {
    clearTimeout(aj_timer[0])
}

export const resetSlide = () => {
    aj_image()
    aj_time()
    showSlides()
    // aj_image()
}
