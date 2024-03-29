import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import theme from '@/store/theme';

const Template: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    theme.validateTheme();
    if (pathname === '/') navigate('forecasts');
  }, [navigate, pathname]);

  return (
    <>
      <Navbar />
      <div className="mx-auto container pt-2 pb-12 md:py-8 3xl:max-w-[1440px]">
        <Outlet />
      </div>
    </>
  );
};

export default Template;
