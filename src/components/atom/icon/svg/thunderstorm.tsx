import React from 'react';
import { IconProps } from '..';

const Thunderstorm = ({ size = 12, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size * 0.925}
      viewBox="0 0 108 100"
      fill="none"
    >
      <g filter="url(#filter0_f_1_762)">
        <ellipse cx="53.5" cy="67.5" rx="31.5" ry="9.5" fill="#4DB4FF" />
      </g>
      <path
        d="M32.8069 75.2814L45.9076 51.2315C45.9853 51.0888 46.1348 51 46.2973 51H63.2814C63.6114 51 63.826 51.3474 63.6782 51.6426L56.8724 65.2324C56.7246 65.5276 56.9391 65.875 57.2692 65.875H64L26.8784 98.3564C26.5053 98.6829 25.959 98.2447 26.1967 97.8096L37.7873 76.5941C37.9489 76.2983 37.7349 75.9375 37.3979 75.9375H33.1966C32.8598 75.9375 32.6458 75.5771 32.8069 75.2814Z"
        fill="url(#paint0_linear_1_762)"
      />
      <g filter="url(#filter1_bi_1_762)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M77 30C77 30.7882 76.9696 31.5693 76.9099 32.3422C80.1949 29.6296 84.4071 28 89 28C99.4934 28 108 36.5066 108 47C108 57.158 100.029 65.4541 90 65.9741V66H89H19H17V65.896C7.44667 64.8966 0 56.8179 0 47C0 37.1618 7.47752 29.07 17.0593 28.0979C18.0405 12.4156 31.0704 0 47 0C63.5685 0 77 13.4315 77 30Z"
          fill="url(#paint1_linear_1_762)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1_762"
          x="0"
          y="36"
          width="107"
          height="63"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="11" result="effect1_foregroundBlur_1_762" />
        </filter>
        <filter
          id="filter1_bi_1_762"
          x="-7"
          y="-7"
          width="122"
          height="80"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.5" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_762" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_762" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.82 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_762" />
        </filter>
        <linearGradient id="paint0_linear_1_762" x1="44.5" y1="51" x2="44.5" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F8FD00" />
          <stop offset="1" stopColor="#FD9800" />
        </linearGradient>
        <linearGradient id="paint1_linear_1_762" x1="56" y1="89.5" x2="77" y2="-5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFEC45" stopOpacity="0.5" />
          <stop offset="0.463847" stopColor="#48B2FF" stopOpacity="0.65" />
          <stop offset="1" stopColor="#0082DF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Thunderstorm;
