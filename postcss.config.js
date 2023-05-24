import { writeFile } from 'node:fs/promises';

export default {
  plugins: {
    'postcss-rename': {
      strategy: 'minimal',
      by: 'whole',
      outputMapCallback: async (map) => {
        await writeFile('./class-map.json', JSON.stringify(map));
      },
    },
  },
};
