import React from 'react';
import colors from '@/constants/colors/alert';

type Props = {
  title: string;
  description?: string;
  color?: keyof typeof colors;
};

const Alert = ({ title, description, color = 'primary' }: Props) => {
  return (
    <div className={`${colors[color]} p-4 rounded-[8px]`}>
      <h3 className="font-semibold text-base">{title}</h3>
      <p className={`${!description && 'hidden'} font-normal`}>{description || null}</p>
    </div>
  );
};

export default Alert;
