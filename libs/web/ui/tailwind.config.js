const { createGlobPatternsForDependencies } = require('@nx/react/tailwind')
const { join } = require('node')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [require('./tailwind.base.preset.js')],
  theme: {
    extend: {},
  },
  plugins: [],
}
