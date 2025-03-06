module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#007bff', // Add custom colors
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'), // Add Tailwind plugins
    ],
}