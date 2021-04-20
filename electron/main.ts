import { app, BrowserWindow, ipcMain } from 'electron'
import * as path from 'path'
import * as url from 'url'
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer'
import { electron } from 'node:process'



const OpenDashboard = () => {
    const dash = new BrowserWindow(
        {
            width: 1920,
            height: 1080,
            resizable: false,
            maximizable: false,
            alwaysOnTop: true,
            fullscreen: true,
            icon:`${__dirname}/build/logo.png`,
            show: false,
            webPreferences: {
                nodeIntegration: true
            }
        }
    )
    if (process.env.NODE_ENV === 'development'){
        dash.loadURL('http://localhost:4000')
    } else {
        dash.loadURL('file:'+path.join(__dirname, 'renderer/index.html'))
    }


}
app.on('ready', OpenDashboard)
  .whenReady()
  .then(() => {
    if (process.env.NODE_ENV === 'development') {
      installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err))
      installExtension(REDUX_DEVTOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err))
    }
  })
app.allowRendererProcessReuse = true