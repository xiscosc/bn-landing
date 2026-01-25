import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import type { Connect } from "vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		{
			name: "serve-static-html",
			configureServer(server) {
				server.middlewares.use((req: Connect.IncomingMessage, res, next) => {
					if (req.url === "/radioplayer" || req.url === "/radioplayer/") {
						const filePath = resolve("static/radioplayer/index.html");
						const content = readFileSync(filePath, "utf-8");
						res.setHeader("Content-Type", "text/html");
						res.end(content);
						return;
					}
					if (req.url === "/radioplayer.html") {
						res.writeHead(301, { Location: "/radioplayer" });
						res.end();
						return;
					}
					next();
				});
			},
			configurePreviewServer(server) {
				server.middlewares.use((req: Connect.IncomingMessage, res, next) => {
					if (req.url === "/radioplayer" || req.url === "/radioplayer/") {
						const filePath = resolve("build/radioplayer/index.html");
						const content = readFileSync(filePath, "utf-8");
						res.setHeader("Content-Type", "text/html");
						res.end(content);
						return;
					}
					if (req.url === "/radioplayer.html") {
						res.writeHead(301, { Location: "/radioplayer" });
						res.end();
						return;
					}
					next();
				});
			},
		},
		tailwindcss(),
		enhancedImages(),
		sveltekit(),
	],
});
