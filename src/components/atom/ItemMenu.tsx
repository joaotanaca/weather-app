import React, { useMemo } from 'react';
import Icon, { IconsName } from './icon';

export type ItemMenu = {
    icon?: IconsName | JSX.Element
    className?: string
    title: string
    onClick?: () => void
}
const ItemMenu = ({ title, icon, onClick, className }: ItemMenu) => {
    const IconMenu = useMemo(() => typeof icon === "string" ? <Icon name={icon} size={16} /> : icon, [icon])
    const handleOnClick = () => {
        onClick?.()
        document.querySelectorAll('.menu').forEach((menu) => {
            menu.classList.remove('active')
        })
    }
    return <button onClick={handleOnClick} className={`${className} ${!className?.includes('hover:bg') && "hover:bg-neutral-300 dark:text-white"} ${!className?.includes('hover:text-') && "hover:dark:text-neutral-900"} p-2 w-full text-neutral-900 dark:text-white flex items-center gap-1 rounded-[4px] text-base transition-all`} type='button'>
        <div className='min-w-4 min-h-4'>
            {IconMenu}
        </div>
        {title}
    </button>;
}

export default ItemMenu;

