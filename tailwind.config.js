/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
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
