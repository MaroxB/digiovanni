/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        red:    '#A61E22',
        green:  '#2E5E3E',
        cream:  '#F4EFE6',
        ink:    '#1A1A1A',
        beige:  '#E8D9C5',
      },
      fontFamily: {
        cinzel:    ['Cinzel', 'serif'],
        playfair:  ['Playfair Display', 'serif'],
        lora:      ['Lora', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
      borderRadius: {
        DEFAULT: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        full: '0px',
      },
    },
  },
  plugins: [],
}
