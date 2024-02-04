/* eslint-disable react-refresh/only-export-components */
import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import type { ItemMenu } from '../atom/ItemMenu';
import ItemMenuComponent from '../atom/ItemMenu';
import { v4 as uuid } from 'uuid';

export type OptionsMenu = ItemMenu[];
export type MenuRef = { open: () => void };

type MenuProps = {
  className?: string;
  options: OptionsMenu;
};

const Menu = ({ options }: MenuProps, ref: React.Ref<unknown>) => {
  const menu = useMemo(() => options.map((option) => <ItemMenuComponent key={uuid()} {...option} />), [options]);
  const menuRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(
    ref,
    () => ({
      open() {
        menuRef.current?.classList.toggle('active');
      },
    }),
    [],
  );

  return (
    <div
      ref={menuRef}
      className="menu shadow-menu bg-white dark:bg-neutral-800 rounded-xl p-2 absolute top-full right-0"
    >
      {menu}
    </div>
  );
};

export default forwardRef(Menu);
