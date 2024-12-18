/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                accent: '#4A52E8',
                'brand-green': '#7DFF68'
            },
            fontFamily: {
                iceland: 'Iceland',
                bigShouldersDisplay: [ 'Big Shoulders Display' ]
            }
        }
    },
    plugins: [],
};
