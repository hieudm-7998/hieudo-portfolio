module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}", "./layouts/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        lg: "798px",
        xl: "798px",
      },
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '1px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    }
  },
};
