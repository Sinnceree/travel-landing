import React from "react";

const PromoHero: React.FC = () => {
	const backgroundImg =
		"https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80";

	return (
		<div
			className="px-24 mt-24 container mx-auto bg-red-500 bg-cover bg-no-repeat bg-center rounded-2xl h-80 flex flex-col justify-center relative overflow-hidden"
			style={{ backgroundImage: `url(${backgroundImg})` }}
		>
			<h1 className="text-white font-bold text-5xl z-[2] font-['Inter']">
				Plan your trip with a travel
				<br /> expert
			</h1>
			<p className="text-white z-[2] text-2xl mt-8 font-['Inter']">
				Our professional advisors can craft your perfect itinerary
			</p>

			<div className="left-0 top-0 content-[''] absolute bg-black w-full h-full opacity-30 z-[1]" />
		</div>
	);
};

export default PromoHero;
