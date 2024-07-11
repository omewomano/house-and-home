/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'green-850': '#009674',
        'red-850':'#c7186f'
      },
    },
    
  },
  plugins: [require('flowbite/plugin')
    
  ],
}

