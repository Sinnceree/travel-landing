import React, { useState } from 'react';
import classNames from 'classnames';

const PropertyItem: React.FC<PropertyItemProps> = ({ image, title }) => {
  const [hovering, setHovering] = useState(false);

  const classes = classNames('w-full h-full absolute bg-cover bg-no-repeat bg-center transition-all duration-500', {
    'scale-125 cursor-pointer': hovering
  });
  
  const onMouseEnter = () => setHovering(true);

  const onMouseLeave = () => setHovering(false);

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='overflow-hidden shadow-lg min-w-[26rem] min-h-[15rem] rounded-lg flex items-end relative before:content-[""] w-full h-full bg-black'>
      <h1 className='text-white font-bold text-lg p-3 z-10'>{title}</h1>

      <div className={classes} style={{ backgroundImage: `url(${image})` }} />
    </div>
  )
}

interface PropertyItemProps {
  image: string;
  title: string;
}

export default PropertyItem;