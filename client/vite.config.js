import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginFonts } from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePluginFonts({
			google: {
				families: [
					// NAMES AND TYPES
					"Bebas Neue", // font-family: 'Bebas Neue', cursive;
					{
						// THE GIRLS
						name: "Public Sans",
						styles: "wght@600;700",
						defer: true,
						// font-family: 'Public Sans', sans-serif;
					},
					{
						// WOD LINES
						name: "Gelasio",
						styles: "ital,wght@1,400;1,500;1,600",
						defer: true,
						// font-family: 'Gelasio', serif;
					},
				],
			},
		}),
	],
});
