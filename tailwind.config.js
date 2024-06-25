/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        customBlack: '0 0 4px rgba(0, 0, 0, 0.6)',
      },
      fontFamily: {
        roboto: ['"Roboto Condensed"', 'sans-serif'],
      },

      boxShadow: {
        customBlack: '1px 1px 8px 1px rgba(0, 0, 0, 0.6)',
        customPurple: '1px 1px 8px 4px rgba(12, 5, 32, 0.6)',
      },
      colors: {
        lightPurple: '#ebe7ef',
        darkPurple: '#1d0433',
        mediumPurple: '#9c7fd3',
        softPurple: '#a690c5',
        deepPurple: '#3e2a60',
        darkerPurple: '#321061',
        lightestPurple: '#9082a3',
        vibrantPurple: '#9e5ef8',
        softYellow: '#f8e59c',
        lightGrayPurple: '#c1b2dd',
        blue: '#6cb7f5',
        darkBlue: '#9d5af5',
        orange: '#f5a76c',
        green: '#5af59d',
        pink: '#f55a98',
        gradientStart: '#a17eda',
        gradientEnd: '#895fc4',
        borderPurple: '#3a2353',
        backgroundPurple: '#c18cfa',
        summaryText: '#191321',
        listItem: '#30273a',
        answerText: '#251e2f',
        correctAnswer: '#054e37',
        wrongAnswer: '#730b4b',
        skippedAnswer: '#d1baf2',
        statsNumber: '#594276',
        statsText: '#30273a',
      },
    },
  },
  plugins: [],
};
