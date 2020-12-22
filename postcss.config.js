module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    ...(process.env.NODE_ENV === 'production' ? ['autoprefixer'] : []),
    'postcss-nested', // or require('postcss-nesting')
  ],
};
