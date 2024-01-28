import React from "react";
import { IconProps } from "..";

const MoonCloudy = ({ size = 12, className }: IconProps) => {
    return (
        <svg
            className={className}
            width={size}
            height={size * 0.702}
            viewBox="0 0 443 311"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_f_7_11206)">
                <path
                    d="M107.268 6.72311C114.278 6.72136 121.27 7.42963 128.137 8.83711C141.39 11.5668 153.974 16.8888 165.164 24.4971C180.667 35.0048 193.053 49.4945 201.021 66.4436C208.989 83.3926 212.244 102.175 210.444 120.817C208.644 139.458 201.856 157.271 190.793 172.383C179.73 187.495 164.801 199.347 147.574 206.695C141.312 209.356 134.8 211.388 128.136 212.76C113.685 215.69 98.7754 215.508 84.4005 212.224C70.0257 208.941 56.5155 202.632 44.77 193.718C33.0244 184.804 23.3132 173.489 16.2832 160.528C9.25319 147.566 5.06578 133.256 3.99992 118.549C15.3314 121.201 27.1023 121.372 38.5059 119.049C48.7389 116.953 58.4592 112.863 67.1119 107.012C79.9742 98.3288 90.0422 86.1017 96.0959 71.8121C98.1414 66.9726 99.7027 61.9424 100.757 56.7951C103.004 45.7664 102.921 34.3898 100.513 23.3951C99.3016 17.8974 97.5102 12.5437 95.1689 7.42412C99.185 6.95677 103.225 6.7227 107.268 6.72311Z"
                    fill="#713FFD"
                />
                <g filter="url(#filter1_f_7_11206)">
                    <path
                        d="M177.339 38.8961C154.095 17.9666 123.644 13.8914 109.325 29.7938C95.0065 45.6962 102.242 75.5544 125.487 96.4839C148.732 117.413 179.182 121.489 193.501 105.586C207.82 89.6838 200.584 59.8256 177.339 38.8961Z"
                        fill="#A586FC"
                    />
                </g>
                <g filter="url(#filter2_d_7_11206)">
                    <path
                        d="M312.345 279H120.913C102.343 278.986 84.4976 271.789 71.1137 258.915C57.7298 246.041 49.8447 228.489 49.1092 209.933C48.3737 191.377 54.8448 173.256 67.1677 159.364C79.4906 145.471 96.71 136.884 115.221 135.4C117.861 116.76 126.278 99.4166 139.289 85.8099C152.299 72.2032 169.248 63.0179 187.752 59.5463C206.255 56.0747 225.381 58.4915 242.439 66.4567C259.497 74.4218 273.628 87.5345 282.845 103.95C299.75 98.098 318.015 97.4142 335.311 101.986C352.606 106.558 368.148 116.178 379.953 129.619C391.759 143.06 399.293 159.713 401.594 177.453C403.896 195.194 400.861 213.218 392.877 229.227C388.192 243.69 379.045 256.298 366.749 265.24C354.453 274.182 339.641 278.999 324.437 279H312.345Z"
                        fill="url(#paint0_linear_7_11206)"
                    />
                    <path
                        d="M324.437 278C332.156 278 339.746 276.767 346.996 274.336C354.006 271.985 360.587 268.555 366.557 264.14C372.458 259.776 377.631 254.548 381.932 248.602C386.287 242.582 389.649 235.96 391.925 228.919L391.949 228.847L391.983 228.779C395.01 222.731 397.341 216.333 398.911 209.763C400.526 203.003 401.345 196.017 401.345 188.999C401.345 182.96 400.737 176.925 399.537 171.062C398.368 165.348 396.623 159.728 394.352 154.357C392.121 149.084 389.36 143.997 386.146 139.24C382.962 134.527 379.305 130.095 375.278 126.067C371.25 122.039 366.818 118.383 362.105 115.199C357.347 111.984 352.261 109.224 346.988 106.993C341.617 104.722 335.997 102.977 330.283 101.808C324.42 100.608 318.384 99.9995 312.345 99.9995C302.346 99.9995 292.531 101.645 283.172 104.891L282.383 105.165L281.973 104.436C274.357 90.8942 263.279 79.5216 249.937 71.5478C243.189 67.5152 235.94 64.399 228.391 62.2857C220.602 60.1055 212.512 59 204.345 59C193.361 59 182.638 60.977 172.475 64.876C162.657 68.6427 153.65 74.0837 145.705 81.048C137.806 87.9722 131.251 96.1422 126.221 105.331C121.069 114.745 117.701 124.907 116.211 135.535L116.1 136.33L115.299 136.393C106.341 137.094 97.7219 139.453 89.6818 143.403C81.8694 147.242 74.8932 152.434 68.947 158.834C56.7289 171.987 50 189.123 50 207.087C50 216.66 51.8748 225.947 55.5723 234.689C57.3495 238.891 59.5491 242.943 62.1102 246.734C64.6472 250.489 67.5607 254.02 70.7699 257.23C73.9791 260.439 77.5104 263.352 81.2655 265.889C85.0565 268.45 89.109 270.65 93.3106 272.427C102.052 276.125 111.339 278 120.913 278H312.345H324.437ZM324.437 279H312.345H120.913C81.1966 279 49 246.803 49 207.087C49 169.286 78.1646 138.297 115.221 135.396C121.35 91.6574 158.917 58 204.345 58C238.048 58 267.422 76.5231 282.845 103.946C292.087 100.741 302.012 98.9995 312.345 98.9995C362.051 98.9995 402.345 139.294 402.345 188.999C402.345 203.459 398.936 217.121 392.877 229.227C383.54 258.109 356.427 279 324.437 279Z"
                        fill="white"
                        fill-opacity="0.5"
                    />
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_7_11206"
                    x="0"
                    y="2.72314"
                    width="406.345"
                    height="280.277"
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
                        result="effect1_foregroundBlur_7_11206"
                    />
                </filter>
                <filter
                    id="filter1_f_7_11206"
                    x="81.9736"
                    y="0.0932617"
                    width="138.879"
                    height="135.194"
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
                        result="effect1_foregroundBlur_7_11206"
                    />
                </filter>
                <filter
                    id="filter2_d_7_11206"
                    x="29"
                    y="30"
                    width="413.345"
                    height="281"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx="10" dy="2" />
                    <feGaussianBlur stdDeviation="15" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.258824 0 0 0 0 0.627451 0 0 0 0 0.941176 0 0 0 0.596 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_7_11206"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_7_11206"
                        result="shape"
                    />
                </filter>
                <linearGradient
                    id="paint0_linear_7_11206"
                    x1="225.698"
                    y1="58.0024"
                    x2="328.341"
                    y2="306.166"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="white" stop-opacity="0.604" />
                    <stop offset="1" stop-color="white" stop-opacity="0.2" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default MoonCloudy;
