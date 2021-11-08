module.exports = {
  purge: [
    // "./src/App.jsx", "./src/components/Card.jsx"
    "./src/**/*.jsx",
    "./index.html",
    //只能封包包含字串的樣式名，詳見PurgeCSS
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    //僅使用這裡的設定
    extend: {
      //預設加上這裡的設定
      colors: {
        // brand: "#0fa9e6",
        // "brand-light": "#3fbaeb",
        // "brand-dark": "#0c87b8",
        brand: {
          DEFAULT: "#0fa9e6",
          light: "#3fbaeb",
          dark: "#0c87b8",
        },
      },
      fontFamily: {
        // headline: "Poppins,sans-serif",
        headline: "Avantgarde, sans-serif",
        Yen: "cwTeXYen, sans-serif",
        Noto: "Noto Sans TC’, sans-serif",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      fontSize: ["hover"],
    },
  },
  plugins: [],
};
