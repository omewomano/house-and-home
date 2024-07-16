/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'green-850': '#009674',
        'red-850':'#C7186F',
        'mute': '#F4F4F4'
      },
    },
    
  },
  plugins: [require('flowbite/plugin')
    
  ],
}

