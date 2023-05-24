import { readdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import prettyBytes from 'pretty-bytes';

const DIST_FOLDER = './dist/';
const MAP_FILE = './class-map.json';
const TARGET_FILES_EXT = ['.css', '.js', '.html'];

const classMap = JSON.parse(await readFile(MAP_FILE, 'utf8'));
const calculatePercent = (before, after) => (100 - (after / before) * 100) | 0;

async function* walkFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });

  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);

    if (dirent.isDirectory()) yield* walkFiles(res);
    else yield res;
  }
}

for await (const file of walkFiles(DIST_FOLDER)) {
  if (!TARGET_FILES_EXT.some((ext) => file.endsWith(ext))) continue;

  const fileName = file.split('dist')[1].replace(/\\/, '');
  let content = await readFile(file, 'utf-8');
  const oldSize = content.length;

  Object.keys(classMap).forEach((key) => {
    content = content.replaceAll(key, classMap[key]);
  });

  await writeFile(file, content);

  const newSize = content.length;
  const percent = calculatePercent(oldSize, newSize);

  // eslint-disable-next-line no-console
  console.info(
    `\u001b[32mProcessed: ${prettyBytes(
      newSize
    )} (reduced ${percent}% of original ${prettyBytes(
      oldSize
    )}) of ${fileName}.\u001b[39m`
  );
}
