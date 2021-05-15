/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ['./public/index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          background: '#081420',
        },
        bronze: {
          full: 'rgb(238,141,81)',
          semifull: 'rgba(238, 141, 81, 0.3)',
          semitransparent: 'rgba(198, 198, 198, 0.1)',
        },
        green: {
          source: '#59E0C0',
          'button-start': 'rgba(89, 224, 192, 0.06)',
          'button-end': 'rgba(14, 200, 132, 0.06)',
        },
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
    borderRadius: {
      DEFAULT: '1.5rem',
    },
  },
}
