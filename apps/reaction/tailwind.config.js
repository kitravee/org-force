const { join } = require('node:path')

const { createGlobPatternsForDependencies } = require('@nx/react/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../libs/web/ui/tailwind.base.preset.js')],
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
