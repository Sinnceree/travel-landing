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
    
		const menuClass = classNames("flex gap-10 font-normal z-20", {
			"text-[#000000]": navFocus,
			"text-[#ffffffb3]": !navFocus,
		});

		const logoClass = classNames(
			"flex gap-10 font-bold text-3xl font-['Inter']",
			{
				"text-[#000000]": navFocus,
				"text-[#FFFFFF]": !navFocus,
			}
		);

		const menuItemClass = classNames([
			"hover:before:absolute hover:before:w-full hover:before:h-[2px] hover:before:bg-white hover:before:bottom-[-10px]",
			"relative cursor-pointer hover:text-whit font-['Inter']",
		]);

		return (
			<div className={parentStyles}>
				<div className="container mx-auto flex items-center justify-between">
					<h1 className={logoClass}>trxvl.</h1>

					<ul className={menuClass}>
						<li className={menuItemClass}>Home</li>
						<li className={menuItemClass}>Stays</li>
						<li className={menuItemClass}>Flights</li>
						<li className={menuItemClass}>Packages</li>

						<button className="font-bold font-['Inter'] hover:text-white">
							Sign Up
						</button>
					</ul>
				</div>
			</div>
		);
}

export default Navigation;