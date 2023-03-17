/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      mobile: '375px',
      tablet: '768px',
      desktop: '1440px',
    },

    fontFamily: {
      'outfit': ['Outfit, Arial, sans-serif'],
      'playfair': [
        'Playfair Display, Georgia, serif',
        { fontFeatureSettings: '"lnum", "pnum"' },
      ],
    },

    container: {
      center: true,
      padding: {
        mobile: "20px",
        tablet: "40px",
        desktop: "112px",
      },
    },

    extend: {
      colors: {
        neutral: {
          300: '#d9d9d6',
          700: '#444444',
          900: '#2c2c2c',
        },
        gold: {
          light: '#e6d8cc',
          dark: '#996830',
        }
      },

      spacing: {
        '9.5': '2.375rem',
        '16.5': '4.125rem',
        '19': '4.75rem',
        '21': '5.25rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '30.5': '7.625rem',
        '34': '8.5rem',
        '34.5': '8.625rem',
        '48.5': '12.125rem',
        '160': '40rem',
        '200': '50rem',
      },

      scale: {
        '103': '1.03'
      },
    },
  },
  plugins: [],
}
