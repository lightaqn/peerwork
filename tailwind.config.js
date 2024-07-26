/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  purge: {
    enabled: true,
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./parts/**/*.{js,ts,jsx,tsx}"],
    options: {
      safelist: ["dark"],
    },
  },

  theme: {
    typography: (theme) => ({}),
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: "white",
            background: "dark-gray",
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
