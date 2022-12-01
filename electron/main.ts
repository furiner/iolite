import { app, BrowserWindow } from "electron";
import { join } from "path";

let self: BrowserWindow | null = null;

app.on("ready", async() => {
    self = new BrowserWindow({
        title: "Poopoo",
        webPreferences: {
            nodeIntegration: true
        }
    });

    if (process.env.SAFFRON_DEV == "true") {
        self.loadURL(`http://127.0.0.1:${process.env.SAFFRON_PORT}`);
    } else {
        self.loadFile(join("dist/index.html"))
    }
});

app.on("window-all-closed", async() => {
    app.quit();
})