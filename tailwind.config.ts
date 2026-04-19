import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 自訂色盤
      colors: {
        "warm-white": "#FAFAF8",
        beige: {
          50: "#FAF7F2",
          100: "#F5EFE6",
          200: "#EDE0CB",
          300: "#D9C9AC",
        },
        sky: {
          50: "#EEF6FB",
          100: "#D4E8F4",
          200: "#AACFE8",
          300: "#7AAFC8",
        },
        sage: {
          50: "#EFF6F2",
          100: "#D4ECDE",
          200: "#A8D4BC",
          300: "#74B094",
        },
        ink: "#1A1A1A",
        "ink-mid": "#4A4A4A",
        "ink-muted": "#8A8A8A",
        border: "#E8E0D4",
      },
      // 字體
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      // 動畫
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
