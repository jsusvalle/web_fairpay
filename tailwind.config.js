module.exports = {
  content: ["./*.html", "./src/**/*.css"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
