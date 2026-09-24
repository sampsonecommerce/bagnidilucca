import { defineConfig } from "vite";

// Custom domain (my-tuscany-home.com) serves from the root, so base stays "/".
// If deploying to a project page (user.github.io/repo), set base to "/repo/".
export default defineConfig({
  base: "/",
  build: {
    target: "es2022",
    assetsInlineLimit: 0,
  },
});
