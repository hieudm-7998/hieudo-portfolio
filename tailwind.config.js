module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}", "./layouts/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        sm: "540px",
        md: "720px",
        lg: "600px",
        xl: "600px",
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
