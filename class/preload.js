const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('apiStreamTools', {
	close: () => ipcRenderer.send('close'),
	fullscreen: () => ipcRenderer.send('fullscreen'),
	exitFullscreen: () => ipcRenderer.send('exit-fullscreen')
});