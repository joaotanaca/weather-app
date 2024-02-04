import React, { useMemo } from 'react';
import theme from '@/store/theme';
import { observer } from 'mobx-react';
import { FiMoon, FiSun } from 'react-icons/fi';

const DarkModeSwitcher = observer(() => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const colorIcons = useMemo(() => (theme.isDark ? '#FFF' : '#000'), [theme.isDark]);
  return (
    <button
      className="w-full md:w-auto cursor-pointer flex flex-col items-center justify-center"
      onClick={theme.toogleTheme}
    >
      <div className="w-9 h-9 flex items-center overflow-hidden relative">
        <div
          className={`w-[200%] flex gap-2 justify-between items-center absolute top-1/2 -translate-y-1/2 ${theme.isDark ? 'left-1' : '-left-[105%]'} transition-all duration-500`}
        >
          <FiMoon className="transition-[translate] duration-500" size={28} color={colorIcons} />
          <FiSun className="transition-[translate] duration-500" size={28} color={colorIcons} />
        </div>
      </div>
      <span className="w-full md:hidden flex flex-col gap-1 items-center justify-center text-sm font-bold">Tema</span>
    </button>
  );
});

export default DarkModeSwitcher;
