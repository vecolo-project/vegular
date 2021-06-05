const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
  important: true,
  prefix: "",
  purge: {
    enabled: guessProductionMode(),
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        light: "#F5FFFF",
        blue: {
          100: "#C2EAFF",
          200: "#85D4FF",
          300: "#47BFFF",
          400: "#1FB0FF",
          500: "#009FF5",
          600: "#007CBE",
          700: "#00507A",
          800: "#00283D",
          900: "#000D14",
        },
        green: {
          200: "#EEFF33",
          400: "#8B9700",
          500: "#5E6600",
          700: "#383D00",
          900: "#131400",
        },
        purple: {
          100: "#E3E5F2",
          200: "#C8CBE5",
          300: "#989FCE",
          400: "#747EBE",
          500: "#5964B1",
          600: "#3B447D",
          700: "#272D53",
          800: "#14172A",
          900: "#07080E",
        },
        grey: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        // gray
        // purple
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
