// this ass code was produced by @8leuv

const {BrowserWindow, app, screen} = require('electron');
const path = require('path');

function Client() {
    const { height, width } = screen.getPrimaryDisplay().workAreaSize;
    const client = new BrowserWindow({
        icon: path.join(__dirname, ''), //-- Change this path if u want a different icon (i cannot be fucked personally)
        fullscreen: true,
        fullscreenable: false,
        autoHideMenuBar: true,
        resizable: false,
        minimizable: false,
        alwaysOnTop: true,
        focusable: false,
        transparent: true,
        frame: false, //-- Removes the close, minimize etc bar at the top
        webPreferences: {
            devTools: false,
        }
    });
    client.loadFile('./src/index.html/');
    client.setIgnoreMouseEvents(true);
};


app.on('ready', () => {
    Client();
});