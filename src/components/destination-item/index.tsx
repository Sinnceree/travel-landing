import React, { useState } from "react";
import classNames from "classnames";

const DestinationItem: React.FC<DestinationItemProps> = ({ image, title }) => {
	const [hovering, setHovering] = useState(false);

	const classes = classNames(
		"w-full h-full absolute bg-cover bg-no-repeat bg-center transition-all duration-500",
		{
			"scale-125 cursor-pointer": hovering,
		}
	);

	const onMouseEnter = () => setHovering(true);

	const onMouseLeave = () => setHovering(false);

	return (
		<div
			className="flex min-w-[20rem] h-48 bg-cover bg-no-repeat bg-center rounded-xl relative overflow-hidden"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<h1 className="text-white font-semibold text-lg flex items-end pb-3 pl-4 z-10 font-['Inter']">
				{title}
			</h1>

			<div className={classes} style={{ backgroundImage: `url(${image})` }} />
		</div>
	);
};

interface DestinationItemProps {
	image: string;
	title: string;
}

export default DestinationItem;
