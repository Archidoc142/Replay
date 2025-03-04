import { app, BrowserWindow } from 'electron';

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false, // Sécurité
            contextIsolation: true,
        }
    });

    mainWindow.loadURL('http://127.0.0.1:8000'); // Laravel doit être en cours d'exécution
});
