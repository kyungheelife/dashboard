import { firstLoad } from "./firstLoad"
import { ipcRenderer } from "electron"
import $ from "jquery"
import { contentVisible, imageSlider } from "./func"

export const serverIP = "localhost";

export const key = () => {
    // imageSlider.b
    // contentVisible.bind(false)

    // $(document).keydown((event) => {
    //    if (event.keyCode == '37') {
    //       imageSlider(true);
    //    }
    //    if (event.keyCode == '39') {
    //        imageSlider(false);
    //   }
    // });
}

export const Lunch = () => {
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
            $("#version").text(`KHLIFEDash ${args} BACKPORTED 3.0.0`);
        });
        
        firstLoad();
        
    });
}