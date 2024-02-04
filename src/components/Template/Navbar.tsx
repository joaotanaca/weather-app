import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import DarkModeSwitcher from '../organisms/DarkModeSwitcher';
import Icon from '../atom/icon';
import city from '@/store/city';

const Navbar = () => {
    const { pathname } = useLocation()
    const isHomePage = useMemo(() => !pathname.includes("add-forecast"), [pathname])
    return <div className="fixed md:static bottom-0 left-0 z-10 w-full 3xl:px-0 shadow-md dark:shadow-none bg-white dark:bg-[#111015] dark:border-t-1 dark:border-neutral-600 font-nunito-sans">
        <div className="flex gap-2 w-full p-5 shadow-t-2xl dark:shadow-none mx-auto container py-4 3xl:max-w-[1440px] justify-between  font-nunito-sans">
            <Link
                to="/forecasts"
                onClick={city.resetCitySelected}
                className={`w-full md:w-auto flex flex-col md:flex-row gap-1 items-center justify-center text-sm md:text-lg font-bold ${isHomePage ? "text-primary-600 md:text-black" : ""}`}
            >
                {/* Desktop */}
                <Icon className='hidden md:block' name="sun_clear" size={45} />
                <span className='hidden md:block dark:text-white'>Weather</span>
                {/* Mobile */}
                <FiHome className='md:hidden' size={28} />
                <span className='md:hidden'>Home</span>
            </Link>
            <Link to={"/add-forecast"} className={`w-full md:hidden flex flex-col gap-1 items-center justify-center text-sm font-bold ${!isHomePage ? "text-primary-600" : ""}`}>
                <MdOutlineAddLocationAlt size={28} />
                Adicionar
            </Link>
            <DarkModeSwitcher />
        </div>
    </div>;
}

export default Navbar;