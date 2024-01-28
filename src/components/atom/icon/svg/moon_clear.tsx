import React from "react";
import { IconProps } from "..";

const MoonClear = ({ size = 12, className }: IconProps) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 254 253"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_f_7_10856)">
                <path
                    d="M123.783 6.63721C131.912 6.63551 140.02 7.45703 147.983 9.0892C163.355 12.2557 177.95 18.4286 190.929 27.2532C208.911 39.4408 223.277 56.2472 232.519 75.9059C241.761 95.5646 245.536 117.35 243.449 138.972C241.361 160.594 233.488 181.255 220.657 198.783C207.825 216.311 190.509 230.058 170.528 238.581C163.265 241.667 155.713 244.024 147.983 245.615C131.222 249.014 113.928 248.802 97.2552 244.994C80.5821 241.185 64.912 233.868 51.2886 223.528C37.6652 213.189 26.4013 200.066 18.2473 185.032C10.0933 169.998 5.23633 153.4 3.99997 136.342C17.1432 139.417 30.7957 139.613 44.022 136.918C55.8913 134.487 67.1657 129.743 77.202 122.956C92.1206 112.885 103.799 98.7044 110.821 82.1312C113.194 76.5179 115.005 70.6834 116.228 64.7132C118.834 51.9222 118.737 38.7278 115.945 25.9762C114.54 19.5993 112.461 13.3895 109.745 7.4512C114.405 6.90865 119.092 6.63686 123.783 6.63721Z"
                    fill="#713FFD"
                />
                <g filter="url(#filter1_f_7_10856)">
                    <path
                        d="M205.052 43.9553C178.091 19.6795 142.772 14.9524 126.164 33.397C109.557 51.8416 117.95 86.4734 144.911 110.749C171.872 135.025 207.191 139.752 223.799 121.307C240.406 102.863 232.013 68.2311 205.052 43.9553Z"
                        fill="#A586FC"
                    />
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_7_10856"
                    x="-3.05176e-05"
                    y="2.63721"
                    width="248.008"
                    height="249.379"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="2"
                        result="effect1_foregroundBlur_7_10856"
                    />
                </filter>
                <filter
                    id="filter1_f_7_10856"
                    x="97.6379"
                    y="2.14575"
                    width="154.687"
                    height="150.413"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="10"
                        result="effect1_foregroundBlur_7_10856"
                    />
                </filter>
            </defs>
        </svg>
    );
};

export default MoonClear;
