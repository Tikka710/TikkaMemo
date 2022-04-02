module.exports = {
  purge: [
    './src/app.vue', // <= ドキュメントからさらに追加
    './src/components/*.{vue,js}',
    './src/layouts/**/*.vue',
    './src/pages/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
],
mode: "jit",
darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    screens: {
      sm: '640px',
    },
    extend: {
      colors: {
        main: 'var(--main)',
        sub: 'var(--sub)',
        back: 'var(--back)',
      }
    },
  },
  plugins: [],
}
