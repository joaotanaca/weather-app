import React from 'react';
import { IconProps } from '..';

const Sunrise = ({ size = 12, className }: IconProps) => {
  return (
    <svg
      className={className}
      width={size}
      height={size * 0.521}
      viewBox="0 0 307 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_7_10864)">
        <mask
          id="mask0_7_10864"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="3"
          y="0"
          width="301"
          height="156"
        >
          <rect x="3" width="301" height="156" fill="#C4C4C4" />
        </mask>
        <g mask="url(#mask0_7_10864)">
          <path
            d="M153 250.825C212.094 250.825 260 202.919 260 143.825C260 84.7305 212.094 36.825 153 36.825C93.9055 36.825 46 84.7305 46 143.825C46 202.919 93.9055 250.825 153 250.825Z"
            fill="#FA9E42"
          />
          <g filter="url(#filter1_f_7_10864)">
            <path
              d="M141.57 122.626C179.001 102.745 200.174 69.3637 188.863 48.0673C177.551 26.7709 138.038 25.6234 100.608 45.5043C63.1774 65.3853 42.0038 98.7661 53.3152 120.063C64.6267 141.359 104.14 142.506 141.57 122.626Z"
              fill="#F8E36F"
            />
          </g>
          <path d="M185 143.435H125V156.435H185V143.435Z" fill="#FA9F42" />
          <path
            d="M9.5 151.935H127.063L154.927 133.325L183.5 151.935H297.5"
            stroke="#D0D0D0"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_7_10864"
          x="0.5"
          y="27.313"
          width="306"
          height="132.687"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_7_10864" />
        </filter>
        <filter
          id="filter1_f_7_10864"
          x="30.2694"
          y="11.313"
          width="181.639"
          height="145.504"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_7_10864" />
        </filter>
      </defs>
    </svg>
  );
};

export default Sunrise;
