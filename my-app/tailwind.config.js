// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-lighter":
          "hsl(var(--primary-hue), var(--primary-saturation), 60.2%)",
        customGray: "#25292e", // Custom color
      },
      screens: {
        xs: "375px", // Extra small devices (e.g., phones)
        sm: "640px", // Small devices (e.g., tablets)
        md: "768px",
        mdd: "996px", // Medium devices (e.g., laptops)
        lg: "1024px", // Large devices (e.g., desktops)
        xl: "1280px", // Extra large devices (large desktops)
        "2xl": "1536px", // Larger than extra large (large screens)
      },
      fontFamily: {
        sans: ['"Inter"', "ui-sans-serif", "system-ui"],
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
    },
  },
  plugins: [],
};
