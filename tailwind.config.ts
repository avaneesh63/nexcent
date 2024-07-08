module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Include all JS and TS files in the pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // Include all JS and TS files in the components directory
    "./app/**/*.{js,ts,jsx,tsx}", // If you're using the new App Directory in Next.js 13+
    "./src/**/*.{js,ts,jsx,tsx}", // If your components are in a src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
