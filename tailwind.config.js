/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        vsm: "360px",
        ssm: "480px",
        sm: "640px",
        md: "768px",
        slg: "960px",
        lg: "1024px",
        lgxl:"1140px",
        lxl: "1200px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
}

