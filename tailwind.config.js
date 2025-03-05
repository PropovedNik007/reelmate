module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        violet: {
          50: '#F5EDFA',
          100: '#E9DCF5',
          600: '#621C97',
          700: '#4E1877',
          800: '#3A1357'
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      }
    },
      backdropBlur: {
        xl: '24px'
      },
      animation: {
        gradient: 'gradient-flow 15s ease infinite',
        float: 'float 8s ease-in-out infinite'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}