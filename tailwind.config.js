/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_drafts/**/*.html",
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.md",
    "./*.html",
  ],
  theme: {
    extend: {
      colors: {
        "raven-blue": "#1c2e4f",
        "raven-red": "#e51564",
      },
    },
  },
  plugins: [],
};
