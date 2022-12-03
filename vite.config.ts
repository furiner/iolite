import { config } from "dotenv";
import { defineConfig } from "vite";
import { join } from "path";

// Plugins
import solid from "vite-plugin-solid";
import electron from "vite-plugin-electron";
import renderer from "vite-plugin-electron-renderer";
import { IoliteHmr } from "./src/plugins/IoliteHmr";

// Include .env files
config();

export default defineConfig({
    envPrefix: "SAFFRON_",
    plugins: [
        IoliteHmr(),
        
        solid({
            
        }),
        
        // Electron
        electron([
            {
                entry: "electron/main.ts",
                onstart: (options) => {
                    options.startup();
                },
                vite: {
                    build: {
                        outDir: "dist/electron/"
                    }
                }
            }
        ]),

        renderer({
            nodeIntegration: true
        })
    ],
    
    server: {
        host: "127.0.0.1",
        port: parseInt(process.env.SAFFRON_PORT ?? "4930")
    },


    build: {
        target: "esnext",
        outDir: "dist"
    }
});