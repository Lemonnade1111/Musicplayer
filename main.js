const { app, BrowserWindow } = require('electron');
const path = require('path'); // ✅ this line fixes the error

function createWindow() {
  const win = new BrowserWindow({
    width: 300,
    height: 550,
    frame: false,
    transparent: true,
    icon: path.join(__dirname, 'music.ico'), 
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
