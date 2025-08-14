import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: { soft: "0 8px 30px rgba(0,0,0,0.08)" },
      colors: {
        brand: {
          50: "#eef6ff",100:"#d9e9ff",200:"#b7d3ff",300:"#8eb8ff",
          400:"#5b95ff",500:"#2d6bff",600:"#1f53db",700:"#1a45b3",800:"#183d91",900:"#163671"
        }
      }
    }
  },
  plugins: []
} satisfies Config;
