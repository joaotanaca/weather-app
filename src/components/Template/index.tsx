import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../organisms/Navbar";

const Template: React.FC = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (pathname === "/") navigate("forecasts");
    }, []);

    return (
        <>
            <Navbar />
            <div className="mx-auto container py-3 3xl:max-w-[1440px]">
                <Outlet />
            </div>
        </>
    );
};

export default Template;
