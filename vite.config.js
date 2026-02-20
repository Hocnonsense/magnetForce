import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function presetsIndexPlugin() {
  const dir = path.resolve(import.meta.dirname, 'public/presets');
  const updateIndex = () => {
    const names = fs.readdirSync(dir)
      .filter(f => f.endsWith('.json'))
      .map(f => f.replace(/\.json$/, ''));
    fs.writeFileSync(`${dir}.json`, JSON.stringify(names, null, 2));
  };
  return {
    name: 'presets-index',
    buildStart() {
      updateIndex();
    },
    configureServer(server) {
      fs.watch(dir, () => {
        updateIndex();
        server.ws.send({ type: 'full-reload' });
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  base: '/magnetForce/',
  plugins: [react(), presetsIndexPlugin()],
});
