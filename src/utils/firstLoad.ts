import $ from "jquery"
import EventEmitter from "events"
import TypedEmitter from "typed-emitter"
import { serverIP } from "./mainCore"
import { mainLoading } from "./func"
import { resetSlide, stop } from "./image"

interface MessageEvents {
    error: (error: Error) => void,
    message: (status: boolean) => void
}

var CheckRoutine = new EventEmitter() as TypedEmitter<MessageEvents>;


export const firstLoad = () => {
    mainLoading()
    $("#image_slider").one("animationend", () => {
        resetSlide()
    })
    const controller = (res: string) =>  {
        console.log(res)
        switch (res) {
            case "ok": {
                const status: boolean = true
                return status
            }
            case "no": {
                const status: boolean = false
                return status
            }
            default: {
                const status: boolean = false
                return status
            }
        }
    }
    const media = () => {
        $.ajax({
            cache: false,
            type: "GET",
            url: `http://${serverIP}:2019/api/ontime`,
            success: function (res) {
                let status = controller(res)
                if(status) {
                    CheckRoutine.emit("message", status)
                } else {
                    CheckRoutine.emit("message", status)
                }
            }
        })
    }
    setInterval(() => media(), 1000)
    
    CheckRoutine.once("message", media => {
        console.log(media)
        const stat: boolean = media
        console.log("status: "+ stat)
        if (stat == true) {
            $("#image_slider").css("animation", "content_change 0.7s ease both");
        } else { 
            if (stat == false) {
                $("#image_slider").css("animation", "content_change 0.7s reverse both");
                    $("#image_slider").one("animationend", () => {
                    $('.mySlides').remove()
                 stop()
                })
            }           
        }
    })
}