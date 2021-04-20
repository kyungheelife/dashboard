import { firstLoad } from "./firstLoad"
import { ipcRenderer } from "electron"
import $ from "jquery"

// let today = new Date().getDay();
let serverIP = "localhost";

$(window).on("load", () => {
    ipcRenderer.send("dashboardSetting", "ContentLoaded");
    ipcRenderer.send("dashboardSetting", "getVersion");
    ipcRenderer.on("dashRenderFirstSetting", (e, args) => {
        $("#grade").text(`${args.grade}학년`);
        $("#dest_ip").val(args.dest_ip);
        serverIP = args.dest_ip;
    });

    ipcRenderer.on("versionSend", (e, args) => {
        $("#version").text(`KHLIFEDash ${args} BACKPORTED 1.0.0`);
    });

    setInterval(clock, 1000);

    var load = 1;
    firstLoad()
    
    if(load == 1) {
        
    }
});


function clock() {
    var classDate = new Date();
    var year = classDate.getFullYear();
    var month = classDate.getMonth();
    var date = classDate.getDate();
    var day = classDate.getDay();
    var week = ["일", "월", "화", "수", "목", "금", "토"];
    var hours = classDate.getHours();
    var minutes = classDate.getMinutes();
    var seconds = classDate.getSeconds();
    var AMPM;
    // if(today != day) { today = day; getMeal(); }
    
    $("#date").text(`${year}년 ${month+1}월 ${date}일`);
    $("#day").text(`${week[day]}요일`);
    if(hours > 12) { hours = hours - 12; AMPM = "오후" } else { AMPM = "오전" }
    $("#hour").text(`${AMPM} ${hours<10?`0${hours}`:hours}`);
    $("#minute").html(`${minutes<10?`0${minutes}`:minutes}`);
    $("#second").html(`${seconds<10?`0${seconds}`:seconds}`);
}