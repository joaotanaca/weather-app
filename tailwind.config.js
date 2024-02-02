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
            colors: {
                "modal-overlay": "#1D212D80",
                neutral: {
                    100: "#F5F8FA",
                    200: "#E9F0F4",
                    300: "#D3DFE7",
                    400: "#A8B9CA",
                    500: "#798AA3",
                    700: "#455068",
                    900: "#1D212D",
                },
                primary: {
                    200: "#DCF2FE",
                    500: "#3E87F4",
                    600: "#2060EB",
                    800: "#0522A0",
                },
                critical: {
                    200: "#FEEAED",
                    500: "#F64669",
                    600: "#DD214F",
                    800: "#73021D",
                },
                positive: {
                    200: "#D6FC92",
                    500: "#449C0A",
                    600: "#317A06",
                    800: "#163F01",
                },
                promote: {
                    200: "#F5EBFE",
                    500: "#A967F8",
                    800: "#3016A0",
                },
                warning: {
                    200: "#FDEFB0",
                    500: "#CE7100",
                    800: "#602400",
                },
            },
            boxShadow: {
                card: "0px 16px 32px 0px rgba(29, 33, 45, 0.10), 0px 1px 4px 0px rgba(29, 33, 45, 0.15), 0px 0px 1px 0px rgba(29, 33, 45, 0.20)",
                input: "0px 0px 0px 3px rgba(0, 122, 255, 0.30), 0px 0px 0px 1px rgba(255, 255, 255, 0.60)",
            },
            borderWidth: {
                1: "1px",
            },
        },
    },
    plugins: [],
};
