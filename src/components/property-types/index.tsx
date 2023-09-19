import React from 'react';
import { PROPERTY_TYPES } from '../../constants';
import PropertyItem from 'components/property-item';

const Property: React.FC = () => {
  return (
    <div className='mt-24 container mx-auto flex flex-col my-10'>
      <h1 className='text-black font-bold text-3xl'>Browse by property type</h1>

      <div className='flex gap-5 mt-6'>
        {PROPERTY_TYPES.map((o, i) => (
          <PropertyItem key={i} image={o.image} title={o.title} />
        ))}
      </div>
    </div>
  )
}

export default Property;