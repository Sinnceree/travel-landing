import React from 'react';

import Categories from 'components/categories';
import { MagnifyingGlassIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/solid'
import { DESTINATIONS } from '../../constants';

import styles from './index.module.css';
import DestinationItem from 'components/destination-item';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>

      <div className='container mx-auto z-10 '>
        <h1 className='text-7xl font-bold text-white'>The whole world <br/> awaits.</h1>

        <div className='bg-white/40 backdrop-blur-[18px] rounded-2xl py-3 px-4 flex justify-between mt-20 items-center'>

          <div className='flex items-center basis-2/4'>
            <MagnifyingGlassIcon className="h-6 w-6 text-white/70" />
            <input type="text" placeholder='Search destinations, hotels' className="text-white/70 bg-transparent border-none placeholder-inherit border-transparent focus:border-transparent focus:ring-0 text-lg w-full"/>
          </div>


          <div className='flex gap-8 basis-2/4 justify-between'>
            <div className='flex items-center gap-3'>
              <CalendarIcon className="h-6 w-6 text-white/70" />
              <h1 className='text-white/70 text-base'>Check In</h1>
            </div>

            <div className='flex items-center gap-3'>
              <CalendarIcon className="h-6 w-6 text-white/70" />
              <h1 className='text-white/70 text-base'>Check Out</h1>
            </div>

            <div className='flex items-center gap-3'>
              <UserIcon className="h-6 w-6 text-white/70" />
              <h1 className='text-white/70 text-base'>1 room, 2 adults</h1>
            </div>

            <button className="w-40 h-12 px-9 py-3.5 bg-white rounded-3xl justify-center items-center gap-2 inline-flex">
              <a className="opacity-70 text-blue-700 text-lg font-bold">Search</a>
            </button>
          </div>

        </div>

        <Categories />

        <div className='flex absolute w-full h-30 flex-col'>
          <h1 className='text-white font-bold text-3xl'>Top Vacation Destinations</h1>

          <div className='flex gap-5 mt-10 overflow-scroll'>
            {DESTINATIONS.map((d, i) => (
              <DestinationItem key={i} title={d.title} image={d.image} />
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}


export default Header;