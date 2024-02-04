import { FiMoreVertical } from 'react-icons/fi';

import React from 'react';
import Menu, { MenuRef, OptionsMenu } from './Menu';
import Button from '../atom/Button';

type DropdownProps = {
  className?: string;
  options: OptionsMenu;
};

const Dropdown = ({ className, options }: DropdownProps) => {
  let menuRef: MenuRef | null;

  return (
    <div className="relative">
      <Button className={className} onClick={() => menuRef?.open()} color="transparent">
        <FiMoreVertical />
      </Button>
      <Menu
        ref={(node) => {
          menuRef = node as MenuRef;
        }}
        options={options}
      />
    </div>
  );
};

export default Dropdown;
