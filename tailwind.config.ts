module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx", "./layouts/**/*.tsx", "./ui/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        theme: "#3f76ff",
        "hover-gray": "#f5f5f5",
        primary: "#f9fafb", // gray-50
        secondary: "white",
      },
      keyframes: {
        leftToaster: {
          "0%": { left: "-20rem" },
          "100%": { left: "0" },
        },
        rightToaster: {
          "0%": { right: "-20rem" },
          "100%": { right: "0" },
        },
      },
    },
    fontFamily: {
      custom: ["Inter", "sans-serif"],
    },
  },
};
