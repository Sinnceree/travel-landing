import React from "react";

import BeachesIcon from "../../assets/images/categories/beaches.svg";
import CampingIcon from "../../assets/images/categories/camping.svg";
import CastlesIcon from "../../assets/images/categories/castles.svg";
import CountrySideIcon from "../../assets/images/categories/countryside.svg";
import DesertsIcon from "../../assets/images/categories/deserts.svg";
import HouseBoatsIcon from "../../assets/images/categories/houseboats.svg";
import IconCitiesIcon from "../../assets/images/categories/iconic_cities.svg";
import MountainsIcon from "../../assets/images/categories/mountains.svg";
import SkiingIcon from "../../assets/images/categories/skiing.svg";
import TropicalIcon from "../../assets/images/categories/tropical.svg";

const CATEGORY_ITEMS = [
	{ title: "Beaches", icon: BeachesIcon },
	{ title: "Deserts", icon: DesertsIcon },
	{ title: "Mountains", icon: MountainsIcon },
	{ title: "Iconic Cities", icon: IconCitiesIcon },
	{ title: "Houseboats", icon: HouseBoatsIcon },
	{ title: "Countryside", icon: CountrySideIcon },
	{ title: "Camping", icon: CampingIcon },
	{ title: "Castles", icon: CastlesIcon },
	{ title: "Skiing", icon: SkiingIcon },
	{ title: "Tropical", icon: TropicalIcon },
];

const Categories: React.FC = () => {
	return (
		<div className="flex flex-col my-10">
			<h1 className="text-white font-bold text-2xl font-['Inter']">
				Top Categories
			</h1>

			<div className="flex justify-between w-full my-7 flex-wrap">
				{CATEGORY_ITEMS.map((c, i) => (
					<div
						key={i}
						className="flex flex-col basis-1/3 items-center justify-center md:basis-1/12 lg:flex"
					>
						<img src={c.icon} className="h-9" />
						<h1 className="text-white/90 my-3 text-base font-['Inter']">
							{c.title}
						</h1>
					</div>
				))}
			</div>
		</div>
	);
};

export default Categories;
