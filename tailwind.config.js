module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image':
          "url('../styles/img/header_background.jpg'), linear-gradient(#854802,#FFE8CC)",
      },
      spacing: {
        content: '68.75rem',
      },
      fontFamily: {
        yrsa: ['yrsa', 'serif'],
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
