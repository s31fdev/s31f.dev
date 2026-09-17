import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://s31f.dev",
  // GitHub Pages отдаёт project-репозиторий по подпути, локально он не нужен.
  // Когда домен s31f.dev будет привязан — убрать base и положить public/CNAME.
  base: process.env.GITHUB_ACTIONS ? "/s31f.dev" : "/",
  server: { port: 4175 },
});
