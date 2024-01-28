import React from "react";
import { IconProps } from "..";

const SunClear = ({ size = 12, className }: IconProps) => {
    return (
        <svg
            className={className}
            width={size * 1.048}
            height={size}
            viewBox="0 0 246 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_f_7_10853)">
                <path
                    d="M124.446 253.754C189.023 253.754 241.374 201.138 241.374 136.233C241.374 71.3283 189.023 18.7124 124.446 18.7124C59.8684 18.7124 7.51794 71.3283 7.51794 136.233C7.51794 201.138 59.8684 253.754 124.446 253.754Z"
                    fill="#FA9E42"
                />
                <g filter="url(#filter1_f_7_10853)">
                    <path
                        d="M115.997 119.521C154.858 98.88 176.594 63.7579 164.545 41.0736C152.496 18.3893 111.226 16.7327 72.3645 37.3736C33.5033 58.0146 11.7674 93.1366 23.816 115.821C35.8647 138.505 77.1353 140.162 115.997 119.521Z"
                        fill="#F8E36F"
                    />
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_7_10853"
                    x="3.51794"
                    y="14.7124"
                    width="241.856"
                    height="243.042"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="2"
                        result="effect1_foregroundBlur_7_10853"
                    />
                </filter>
                <filter
                    id="filter1_f_7_10853"
                    x="0.492065"
                    y="2.91455"
                    width="187.377"
                    height="151.065"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="10"
                        result="effect1_foregroundBlur_7_10853"
                    />
                </filter>
            </defs>
        </svg>
    );
};

export default SunClear;
