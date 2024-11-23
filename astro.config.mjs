import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://santiagodev.me",
});

// import { defineConfig } from "astro/config";
// import tailwind from "@astrojs/tailwind";

// export default defineConfig({
//   integrations: [tailwind()],
//   site: "https://santiagodev.me",
//   server: {
//     port: 4321,
//     https: false,
//   },
// });
