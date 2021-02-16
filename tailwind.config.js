const colors = require("tailwindcss/colors");

module.exports = {
  important: "#root",
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      safelist: [
        /^grid-cols-/,
        /^sm:grid-cols-/,
        /^md:grid-cols-/,
        /^lg:grid-cols-/,
        /^xl:grid-cols-/,
        //
        /^gap-/,
        /^sm:gap-/,
        /^md:gap-/,
        /^lg:gap-/,
        /^xl:gap-/,
      ],
    },
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        "2xl": "128px",
      },
    },
    fontFamily: {
      display: ["Josefin Sans", "system-ui", "sans-serif"],
      LineAwesome: ["Line Awesome Free", "system-ui", "sans-serif"],
    },
    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      primary: "#EC6041",
      secondary: "#B3421A",
      black: "#121212",
      white: "fff",
      status: {
        success: "#287D3C",
        warning: "#B95000",
        error: "#DA1414",
        info: "#2E5AAC",
      },
      statusBg: {
        successBg: "#EDF9F0",
        warningBg: "#FFF4EC",
        errorBg: "#FEEFEF",
        infoBg: "#EEF2FA",
      },
      facebook: "#325D94",
      googlePlus: "#DF2E1C",
      twitter: "#00AADB",
    },
    extend: {
      outline: {},
      borderColor: {
        primary: "#FFDCBE",
        secondary: "#2DDE98",
        tertiary: "#F57171",
        quateary: "#311695",
        black: "#000",
        white: "#fff",
      },
      boxShadow: {},
      zIndex: {
        "-1": "-1",
        max: 2147483647,
      },
      spacing: {},
      borderWidth: {
        3: "3px",
        5: "5px",
        6: "6px",
      },

      borderRadius: {},
      margin: {
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "-1px": "-1px",
        "-2px": "-2px",
        "-3px": "-3px",
      },
      padding: {
        //
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
      },
      fontSize: {
        f1: ["55px", "101.82%"],
        f2: ["44px", "109.09%"],
        f3: ["35px", "114.29%"],
        f4: ["28px", "114.29%"],
        f5: ["22.5px", "124.44%"],
        f6: ["18px", "155.56%"],
        //
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover"],
      flexDirection: ["hover", "focus", "dark"],
      display: ["hover", "focus", "group-hover", "group-focus", "dark"],
      backgroundOpacity: ["hover", "group-hover", "dark"],
      fontWeight: ["hover", "group-hover", "focus"],
      backgroundColor: ["checked", "disabled"],
      textColor: ["disabled"],
      borderColor: ["checked"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
