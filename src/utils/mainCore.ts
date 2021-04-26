import { firstLoad } from "./firstLoad"
import { ipcRenderer } from "electron"
import $ from "jquery"

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

        var load = 1;
        firstLoad()
        
        if(load == 1) {
            
        }
    });
}