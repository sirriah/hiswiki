module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        110: '27.5rem',
        cnt: '68.75rem',
      },
      colors: {
        accent: {
          200: '#FFE8CC',
          500: '#B46406',
          600: '#854802',
        },
        dark: {
          300: '#4C4338',
          600: '#3D362F',
        },
        light: {
          50: '#F8F8F8',
        },
      },
    },
  },
  plugins: [],
};
