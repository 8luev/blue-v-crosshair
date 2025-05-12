// this ass code was produced by @8leuv

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

function MenuTray() {
    const menu = new BrowserWindow({
        width: 400,
        height: 500,
        autoHideMenuBar: true,
        resizable: false,
        show: false, // Start without it showing
        icon: './src/assets/favicon.png'
    });

    menu.loadFile('./src/menu/menu.html');

    menu.on('blur', () => {
        if(menu.isVisible()) {
            menu.hide(); // If menu loses focus it hides it again
        }
    });

    menu.on('close', (event) => {
        event.preventDefault();
        menu.hide();
    });
    
    tray = new Tray('./src/assets/favicon.png');
    tray.setToolTip('Crosshair application.');

    tray.on('click', () => {
        if(menu.isVisible()) {
            menu.hide();
        } else {
            menu.show();
        }
    });
}


app.on('ready', () => {
    Client();
    MenuTray();
});