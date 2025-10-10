/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-1100": "#0a0a0a",

        /* Colors for Issun-Boshi album release */
        "issun-boshi-yellow": "#fdad42",
        "issun-boshi-red": "#ff0000",
        "issun-boshi-orange": "#fe7f00",
        "issun-boshi-purple": "#352953",
        "issun-boshi-blue": "#396395",
      },
      animation: {
        "slow-spin": "spin 2s linear infinite",
      },
      screens: {
        "8xl": "1600px",
      },
      maxWidth: {
        "8xl": "1600px",
      },
    },
  },
  plugins: [],
};
