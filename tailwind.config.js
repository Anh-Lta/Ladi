/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        textColor: {
            color_bg: "00040f",
            white: {
                100: "#ffffff",
                70: "rgba(255, 255, 255, 0.7)",
                60: "rgba(255, 255, 255, 0.6)",
            },
            black: "#00040E",
            mBlue: "#5CE1E6",
        },
        lineHeight: {
            1.4: "140%",
            1.6: "160%",
            1.7: "170%",
        },
    },

    plugins: [],
};
