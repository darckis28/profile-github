/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "background-basic": "#20293a",
        outline: "#3662E3",
        "text-dark": "#4A5567",
        status: "#111729",
        input: "#364153",
      },
      backgroundImage: {
        "card-gradient":
          "linear-gradient(90deg, rgba(17,23,41,1) 0%, rgba(29,27,72,1) 100%)",
      },
    },
  },
  plugins: [],
};
