import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    base: "/site/",
    plugins: [tailwindcss(), tanstackRouter({ autoCodeSplitting: true, target: "react" }), react()],
});
