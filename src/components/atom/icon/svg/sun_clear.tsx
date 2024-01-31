import React from "react";
import { IconProps } from "..";

const SunClear = ({ size = 12, className }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            width={size}
            height={size}
            viewBox="0 0 110 110"
            fill="none"
        >
            <g filter="url(#filter0_ddi_1_771)">
                <circle
                    cx="55"
                    cy="55"
                    r="32"
                    fill="url(#paint0_linear_1_771)"
                />
            </g>
            <defs>
                <filter
                    id="filter0_ddi_1_771"
                    x="7"
                    y="7"
                    width="96"
                    height="96"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="8" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.992157 0 0 0 0 0.773882 0 0 0 0 0 0 0 0 1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_771"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="5.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.992157 0 0 0 0 0.772549 0 0 0 0 0 0 0 0 0.45 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_1_771"
                        result="effect2_dropShadow_1_771"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_1_771"
                        result="shape"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx="-1" dy="3" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                    />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 0.9 0 0 0 0 0 0 0 0 0.35 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect3_innerShadow_1_771"
                    />
                </filter>
                <linearGradient
                    id="paint0_linear_1_771"
                    x1="55"
                    y1="23"
                    x2="55"
                    y2="87"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FDC500" />
                    <stop offset="1" stopColor="#FD8900" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default SunClear;
