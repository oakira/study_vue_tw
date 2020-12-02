module.exports = {
  purge: [
    './src/**/*.js',
    './src/components/**/*.js',
    './src/**/*.vue',
    './src/components/**/*.vue'
  ],
  prefix: 'tw-',
  important: false,
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      }
    },
    fontFamily: {
      sans: ['メイリオ', 'Meiryo', 'ヒラギノ角ゴ Pro', 'Hiragino Kaku Gothic Pro', '游ゴシック体', 'Yu Gothic', 'YuGothic', 'MS Ｐゴシック', 'MS PGothic', 'Lucida Sans Unicode', 'Lucida Grande', 'Verdana', 'Arial', 'sans-serif'],
      sans_en: ['Verdana', 'Helvetica', 'Arial', 'sans-serif'],
      self: ['游明朝', 'Yu Mincho', 'YuMincho', 'ヒラギノ明朝 Pro W3', 'Hiragino Mincho Pro', 'HGS明朝E', 'ＭＳ Ｐ明朝', 'MS PMincho', 'Times New Roman', 'Times', 'Garamond', 'Georgia', 'serif'],
      self_en: ['Times New Roman', 'Times', 'Garamond', 'Georgia', 'serif']
    }
  },
  future: {
    removeDeprecatedGapUtilities: true
  },
  variants: {},
  plugins: []
}
