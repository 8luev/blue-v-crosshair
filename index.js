const {BrowserWindow, app, Tray} = require('electron');

function Client() {
    const client = new BrowserWindow({
        fullscreen: true, // Fullscreen it so the crosshair defaults to center on any resolution.
        autoHideMenuBar: true,
        resizable: false,
        minimizable: false,
        alwaysOnTop: true,
        focusable: false,
        transparent: true,
        frame: false, // Removes the close, minimize etc bar at the top
        webPreferences: {
            devTools: false,
        }
    });
    client.loadFile('./src/index.html/');
    client.setIgnoreMouseEvents(true); // Ignore mouse events (duh)
};

app.on('ready', () => {
    Client();
});