const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('apiStreamTools', {
	close: () => ipcRenderer.send('close-server'),
	fullscreen: () => ipcRenderer.send('fullscreen-server')
});