/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      colors: {
        background: "#030303",
        foreground: "#FAFAFA",
        muted: "#737373",
        "muted-foreground": "#a3a3a3",
        border: "rgba(255, 255, 255, 0.1)",
        card: "#0a0a0a",
        "card-hover": "#111111",
        surface: "#050509",
        whatsapp: "#25D366",
        "whatsapp-hover": "#20BD5A",
      },
      animation: {
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease forwards",
        "fade-up": "fade-up 0.6s ease forwards",
        scan: "scan-line 3s linear infinite",
        "code-type": "code-type 2s steps(20, end) infinite alternate",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scan-line": {
          "0%": { top: "0%", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { top: "100%", opacity: "0" },
        },
        "code-type": {
          "0%": { width: "0" },
          "50%": { width: "70%" },
          "100%": { width: "70%" },
        },
      },
    },
  },
  plugins: [],
};
