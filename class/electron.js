const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

class Electron {
    generateWindow() {
        const createWindow = () => {
            const win = new BrowserWindow({
                width: 800,
                height: 600,
                frame: false,
                autoHideMenuBar: true,
                webPreferences: {
                    preload: path.join(__dirname, 'preload.js')
                }
            });

            win.loadFile('./pages/home/home.html');
        };

        app.whenReady().then(() => {
            createWindow();

            this.#ipcEvents();

            app.on('activate', () => {
                if (BrowserWindow.getAllWindows().length === 0) {
                    createWindow();
                }
            });
        });

        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit();
            }
        });
    }

    #ipcEvents() {
        ipcMain.on('close', () => {
            console.log('close');
        });

        ipcMain.on('fullscreen', () => {
            console.log('clofullscreenne');
        });
    }
}

module.exports = Electron;
