import React, { useState } from 'react';
import classNames from 'classnames';

const Navigation: React.FC = () => {
  const [navFocus, setNavFocus] = useState(false);
  
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
          setNavFocus(true);
        }
        else {
          setNavFocus(false);
        }
    };

    window.addEventListener('scroll', changeNavbarColor);

    const parentStyles = classNames('flex justify-between h-[94px] items-center px-14 fixed w-full z-20 transition ease-in-out duration-300', { 
      'bg-white shadow-lg': navFocus 
    });
    
    const menuClass = classNames('flex gap-10 text-[#ffffffb3] font-normal z-20 transition ease-in-out duration-300', {
      'text-[#000]': navFocus
    });

    const logoClass = classNames('flex gap-10 text-[#FFFFFF] font-bold text-3xl transition ease-in-out duration-300', {
      'text-[#000]': navFocus
    })

  return (
    <div className={parentStyles}>
      <h1 className={logoClass}>trxvl.</h1>

      <ul className={menuClass}>
        <li>Home</li>
        <li>Stays</li>
        <li>Flights</li>
        <li>Packages</li>
        
        <button className='font-bold'>Sign Up</button>
      </ul>
      
    </div>
  )
}

export default Navigation;