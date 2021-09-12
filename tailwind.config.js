module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      lineClamp: {
        10: '10',
        20: '20'
      },
      backgroundImage: {
        'hero-image': "url('/src/assets/images/space.svg')",
        'hero-image-mobile': "url('/src/assets/images/space_mobile.svg')",
       }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      lineClamp: ['hover'],
    }
  },
  plugins: [
    require('tailwindcss-font-inter'),
    require('@tailwindcss/line-clamp'),
  ],
}
