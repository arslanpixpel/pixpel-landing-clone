import React from 'react';
import Header from '../../components/header';
import BannerNav from '../landing/mobileView/banner';

const ErrorPage = () => {
  return (
    <>
    <Header />
    <BannerNav />
    <div className="flex items-center bg-slate-800 justify-center h-screen">
      <div className="text-center text-white">
        <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      </div>
    </div>
        </>
  );
};

export default ErrorPage;
