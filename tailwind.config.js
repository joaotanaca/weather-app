import colors from "./src/constants/colors/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "nunito-sans": "'Nunito Sans', sans-serif",
            },
            screens: {
                "3xl": "1920px",
            },
            colors,
            boxShadow: {
                card: "0px 16px 32px 0px rgba(29, 33, 45, 0.10), 0px 1px 4px 0px rgba(29, 33, 45, 0.15), 0px 0px 1px 0px rgba(29, 33, 45, 0.20)",
                menu: "0px 0px 1px rgba(29, 33, 45, 0.2), 0px 1px 4px rgba(29, 33, 45, 0.15), 0px 16px 32px rgba(29, 33, 45, 0.1)",
                input: "0px 0px 0px 3px rgba(0, 122, 255, 0.30), 0px 0px 0px 1px rgba(255, 255, 255, 0.60)",
                "t-sm": "0 -1px 2px 0 rgba(0, 0, 0, 0.05)",
                "t-md": "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                "t-lg": "0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                "t-xl": "0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                "t-2xl": "0 -25px 50px -12px rgba(0, 0, 0, 0.25)",
                "t-3xl": "0 -35px 60px -15px rgba(0, 0, 0, 0.3)",
            },
            borderWidth: {
                1: "1px",
            },
        },
    },
    plugins: [],
};
