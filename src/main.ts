import { app, BrowserWindow, ipcMain } from 'electron'
import * as path from 'path'


export const OpenDashboard = () => {
     const dash = new BrowserWindow(
        {
            width: 1920,
            height: 1080,
            resizable: false,
            maximizable: false,
            alwaysOnTop: true,
            fullscreen: true,
            icon:`${__dirname}/build/logo.png`,
            show: true,
            webPreferences: {
                nodeIntegration: true,
            }
        }
    )
    dash.once("ready-to-show", () => {
      dash.show();
    });
    if (process.env.NODE_ENV === 'development'){
        dash.loadURL('http://localhost:4000')

    } else {
        dash.loadURL('file:'+path.join(__dirname, 'renderer/index.html'))
    }
    dash.on("closed", () => {
      app.quit();
    });
    
}

app.on("ready", OpenDashboard);

app.on("window-all-closed", () => {
    app.quit();
});
app.allowRendererProcessReuse = false;
