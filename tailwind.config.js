module.exports = {
  darkMode: false,
  mode: "jit",
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter"],
      mono: ["Menlo", "monospace"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("tailwind-scrollbar"), require("@tailwindcss/forms")],
};
