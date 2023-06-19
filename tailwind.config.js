/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bookshelf:
          "url('https://blog.atados.com.br/wp-content/uploads/2021/11/alfons-morales-YLSwjSy7stw-unsplash-scaled.jpg')",
      },
    },
  },
  plugins: [],
};
