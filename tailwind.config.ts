import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        banner: "#4A4C6C",
      },
      fontFamily: {
        spaceGrotesk: ["var(--font-space-grotest)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
