module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
    require('vue-cli-plugin-tailwind/purgecss')
  ]
}
