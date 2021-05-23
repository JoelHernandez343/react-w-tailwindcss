console.log(process.env.NODE_ENV);

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
