import React from 'react';
import { COMMUNITY_LIST } from '../../constants';

const Community: React.FC = () => {
  return (
    <div className='mt-24 container mx-auto flex flex-col my-10'>
      <h1 className='text-black font-bold text-3xl'>Browse by property type</h1>

      <div className='flex gap-5 mt-6'>
        {COMMUNITY_LIST.map((o, i) => (
          <div key={i} className='p-3 shadow-lg rounded-2xl'>
            <div className='flex h-64 w-80 bg-cover bg-no-repeat bg-center rounded-2xl' style={{ backgroundImage: `url(${o.image})` }} />
            
            <div className='flex flex-col mt-4'>
              <h1 className='text-black/80 text-lg font-medium'>{o.title}</h1>
              <span className='text-black/50 text-sm font-normal mt-1'>{o.category}</span>
              <span className='text-black/50 text-sm font-normal mt-1'>{o.members.toLocaleString()} travelers</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Community;