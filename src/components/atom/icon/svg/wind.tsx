import React from "react";
import { IconProps } from "..";

const Wind = ({ size = 12, className }: IconProps) => {
    return (
        <svg
            className={className}
            width={size}
            height={size * 0.598}
            viewBox="0 0 311 186"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_f_7_10752)">
                <path
                    d="M88.8411 87.6389C88.8411 87.6389 225.93 88.9529 255.611 80.3329C285.292 71.7129 285.254 26.9749 255.611 15.9469C225.968 4.91893 215.837 44.3379 215.837 44.3379"
                    stroke="#D0D0D0"
                    strokeWidth="20"
                    strokeLinecap="round"
                />
                <path
                    d="M122.863 134.656C122.863 134.656 223.471 125.566 267.824 134.656C312.177 143.746 298.054 169.823 277.034 171.015C256.014 172.207 236.617 158.395 236.617 158.395"
                    stroke="#D0D0D0"
                    strokeWidth="20"
                    strokeLinecap="round"
                />
                <path
                    d="M34.1541 139.589H74.1541"
                    stroke="#D0D0D0"
                    strokeWidth="20"
                    strokeLinecap="round"
                />
                <path
                    d="M14 31.5889C14 31.5889 44.519 34.1189 80.682 34.1189C116.845 34.1189 165.862 29.3729 165.862 29.3729"
                    stroke="#D0D0D0"
                    strokeWidth="20"
                    strokeLinecap="round"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_7_10752"
                    x="-0.000610352"
                    y="0"
                    width="310.98"
                    height="185.088"
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
                        result="effect1_foregroundBlur_7_10752"
                    />
                </filter>
            </defs>
        </svg>
    );
};

export default Wind;
