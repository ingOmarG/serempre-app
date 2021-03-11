module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',  
        '2xl': '1536px',
      },
      colors: {
        blue: {
          '400': '#66BEEB',
          '500': '#1E96D4',
        },
      },
      
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active'],
      borderColor: ['active']
    },
  },
  plugins: [],
}
