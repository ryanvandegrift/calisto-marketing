import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cal-accent': '#F6C1D9',
        'cal-accent-dark': '#F4A8CB',
        'cal-bg': '#ffffff',
        'cal-text': '#000000',
        'cal-text-muted': '#4b5563',
        'cal-border': '#000000',
        'cal-border-light': 'rgba(0,0,0,0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        'cal-xs': '0 1px 4px rgba(0,0,0,0.04)',
        'cal-sm': '0 2px 8px rgba(0,0,0,0.06)',
        'cal-md': '0 4px 16px rgba(0,0,0,0.08)',
        'cal-lg': '0 8px 24px rgba(0,0,0,0.12)',
        'cal-xl': '0 12px 32px rgba(0,0,0,0.14)',
      },
      borderRadius: {
        'cal-sm': '4px',
        'cal-md': '8px',
        'cal-lg': '12px',
        'cal-full': '999px',
      },
      spacing: {
        'cal-xs': '8px',
        'cal-sm': '16px',
        'cal-md': '24px',
        'cal-lg': '32px',
        'cal-xl': '48px',
        'cal-2xl': '64px',
      },
    },
  },
  plugins: [],
};
export default config;
