import React from 'react';

type ToggleCardProps = {
  title: string;
  active?: boolean;
  titleDetails?: string;
  description: string;
  ariaLabel: string;
  onClick?: () => void;
};

const ToggleCard = ({ active, ariaLabel, title, titleDetails, description, onClick }: ToggleCardProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${
        active ? 'border-primary-600' : ''
      } border-2 p-5 flex flex-col sm:gap-3 rounded-[8px] cursor-pointer select-none transition-all`}
    >
      <h2 className="font-semibold">
        {title}
        <span className="text-neutral-600 dark:text-gray-300 font-medium ml-2">{titleDetails}</span>
      </h2>
      <p className="text-neutral-600 dark:text-gray-300 text-sm font-normal">{description}</p>
    </button>
  );
};

export default ToggleCard;
