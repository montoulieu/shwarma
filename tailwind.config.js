const colors = require('./node_modules/tailwindcss/colors');

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        fuchsia: colors.fuchsia,
        indigo: colors.indigo,
        teal: colors.teal,
        lime: colors.lime,
        orange: colors.orange,
      },
    },
  },
  variants: {},
  plugins: [],
};
