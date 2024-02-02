import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../atom/icon";
import Switcher from "../../molecules/Switcher";
import theme from "../../../store/theme";
import { observer } from "mobx-react";

const Navbar = () => {
    return (
        <div className="w-full px-2 3xl:px-0 shadow-md dark:shadow-none bg-white dark:bg-transparent font-nunito-sans">
            <div className="mx-auto container py-4 3xl:max-w-[1440px] flex justify-between">
                <Link
                    to="/forecasts"
                    className="flex gap-2 items-center text-lg font-bold"
                >
                    <Icon name="sun_clear" size={45} />
                    Weather
                </Link>
                <Switcher
                    className="flex items-center"
                    value={theme.theme === "dark"}
                    toggle={theme.toogleTheme}
                />
            </div>
        </div>
    );
};

export default observer(Navbar);
