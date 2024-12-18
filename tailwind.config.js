/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                accent: '#4A52E8',
                primary: '#4A52E8'
            },
            fontFamily: {
                iceland: 'Iceland',
                bigShouldersDisplay: [ 'Big Shoulders Display' ]
            }
        }
    },
    plugins: [],
};
