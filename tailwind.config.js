export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: { extend: {
    fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"], display: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"] },
    colors: { tealglow: "#27e0c3", deep: "#071f20" },
    boxShadow: { glow: "0 0 60px rgba(39,224,195,.15)" },
    animation: { float: "float 7s ease-in-out infinite", "fade-up": "fadeUp .7s ease both" },
    keyframes: { float: { "0%, 100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-12px)" } }, fadeUp: { from: { opacity: "0", transform: "translateY(18px)" }, to: { opacity: "1", transform: "translateY(0)" } } }
  }},
  plugins: []
};