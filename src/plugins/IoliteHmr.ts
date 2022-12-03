import { Plugin } from "vite"

export function IoliteHmr(): Plugin {
    return {
        name: "iolite-hmr",
        enforce: "post",
        
        // Handle hot-reloads.
        handleHotUpdate: ({ file, server }) => {
            // Watch TS files as well.
            if (file.endsWith(".ts")) {
                server.ws.send({
                    type: "full-reload",
                    path: "*"
                });

                return [];
            }
        }
    }
}