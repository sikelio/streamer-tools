const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

class Electron {
    #win

    generateWindow() {
        const createWindow = () => {
            this.#win = new BrowserWindow({
                width: 1000,
                height: 600,
                frame: false,
                autoHideMenuBar: true,
                webPreferences: {
                    preload: path.join(__dirname, 'preload.js')
                }
            });

            this.#win.loadFile('./pages/home.html');
        };

        app.whenReady().then(() => {
            createWindow();

            this.#ipcEvents(app, this.#win);

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

    #ipcEvents(app, win) {
        const Template = require('./template');
        const template = new Template;

        ipcMain.on('close', () => {
            app.quit();
        });

        ipcMain.on('fullscreen', () => {
            win.maximize();
        });

        ipcMain.on('exit-fullscreen', () => {
            win.unmaximize()
        });

        ipcMain.on('twitter-template', (event, args) => {
            template.savingTwitterTemplate(args);
        });
    }
}

module.exports = Electron;
