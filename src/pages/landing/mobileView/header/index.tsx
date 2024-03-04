import React, { useState } from 'react';
import HamBurger from '../../../../assets/mobileNav/Hamburger-Menu.png';
import HamBurgerCross from '../../../../assets/mobileNav/Hamburger-Cross.png';
import Logo from "../../../../assets/logo/logo.svg";


const MobNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={`mob-screen-nav relative`}>

      {/* Button to open/close the navigation */}
      
      {/* Your additional image on the right */}
   

      <div className='z-10 relative top-[4vh]' style={{ backgroundColor: '#1f2630' }}>
        <a href="/" rel="PIXPEL">
          <img src={Logo} alt="logo" className="w-40" title="logo" />
        </a>
      </div>
    </div>
  );
};

export default MobNav;
