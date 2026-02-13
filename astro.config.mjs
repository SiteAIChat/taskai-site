import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://taskai.chat',
  output: 'static',
  integrations: [tailwind()],
});
