module.exports = {
  theme: {
    fontFamily: {
      'sans': ['-apple-system', 'BlinkMacSystemFont'],
      'serif': ['Georgia', 'Cambria'],
      'mono': ['SFMono-Regular', 'Menlo'],
      'display': ['Nunito']
    },
    extend: {}
  },
  variants: {},
  plugins: [
    require('tailwindcss-plugins/pagination'),
  ]
}
