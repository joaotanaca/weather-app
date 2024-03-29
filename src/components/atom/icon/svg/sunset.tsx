import React from 'react';
import { IconProps } from '..';

const Sunset = ({ size = 12, className }: IconProps) => {
  return (
    <svg
      className={className}
      width={size}
      height={size * 0.583}
      viewBox="0 0 307 179"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_7_10873)">
        <path d="M182 146H129L155 163.5L182 146Z" fill="#FA9F42" />
        <path
          d="M9.5 150.325H127.063L154.928 168.935L183.5 150.325H297.5"
          stroke="#D0D0D0"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <mask
          id="mask0_7_10873"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="2"
          y="0"
          width="301"
          height="146"
        >
          <rect x="2" width="301" height="146" fill="#C4C4C4" />
        </mask>
        <g mask="url(#mask0_7_10873)">
          <path
            d="M153 246.361C212.094 246.361 260 200.493 260 143.913C260 87.3317 212.094 41.4639 153 41.4639C93.9055 41.4639 46 87.3317 46 143.913C46 200.493 93.9055 246.361 153 246.361Z"
            fill="#FA9E42"
          />
          <g filter="url(#filter1_f_7_10873)">
            <path
              d="M141.57 123.615C179.001 104.58 200.174 72.6186 188.863 52.228C177.551 31.8374 138.038 30.7388 100.608 49.774C63.1773 68.8093 42.0037 100.77 53.3152 121.161C64.6267 141.551 104.14 142.65 141.57 123.615Z"
              fill="#F8E36F"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_7_10873"
          x="0.5"
          y="32.1863"
          width="306"
          height="146.738"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_7_10873" />
        </filter>
        <filter
          id="filter1_f_7_10873"
          x="30.2694"
          y="16.1863"
          width="181.639"
          height="141.016"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_7_10873" />
        </filter>
      </defs>
    </svg>
  );
};

export default Sunset;
