module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        md: "20px",
        lg: "30px",
      },
    },

    extend: {
      boxShadow: {
        custom: '0px 12.117px 24.233px 0px rgba(1, 11, 253, 0.12)',
      },
      colors: {
        white: {
          common: "#FFFFFF",
          secondary: "#EEEEEE",
        },
        blue: {
          common: "#1E2772",
        },
        grey: {
          common: "#555555",
          light: '#c2c2c2'
        },
      },
      borderRadius:{
        sm: '8px',
        md: '14px',
        lg: '24px',
        full: '100%'
      },
      fontFamily: {
        popins: 'Poppins',
        grotesk: 'Space Grotestk',
        inter: 'Inter',
        sans: ["Poppins", "Space Grotesk", "Inter", "sans"],
        serif: ["serif"],
        mono: ["mono"],
      },
      fontSize: {
        sm: "14px",
        md: "16px",
        lg: "18px",
        slg: "20px",
        mlg: "22px",
        elg: "24px",
      },
      lineHeight: {
        tight: 1.25,
        snug: 1.375,
        normal: 1.5,
        relaxed: 1.625,
        loose: 2,
      },
    },
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
  },
};
