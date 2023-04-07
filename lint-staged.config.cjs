const config = {
  '**/*.(ts|tsx)': () => 'npx tsc --noEmit',

  '**/*.(ts|tsx|js|cjs|mjs|jsx|astro)': (filenames) => [
    `npx lint --fix ./ ${filenames.join(' ')}`,
    `npx prettier --write ./ ${filenames.join(' ')}`,
  ],

  '**/*.css': (filenames) => [
    `npx stylelint --fix  ${filenames.join(' ')}`,
    `npx prettier --write ./  ${filenames.join(' ')}`,
  ],

  '**/*.(md|json)': (filenames) =>
    `npx prettier --write ./ ${filenames.join(' ')}`,
};

module.exports = config;
