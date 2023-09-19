import React from "react";
import { OFFERS } from "../../constants";

const Offers: React.FC = () => {
	return (
		<div className="mt-40 container mx-auto flex flex-col my-10">
			<h1 className="text-black font-bold text-2xl font-['Inter']">Offers</h1>

			<div className="flex gap-5 mt-6">
				{OFFERS.map((o, i) => (
					<div
						key={i}
						className="bg-white min-w-[45%] flex p-3 rounded-2xl shadow-lg gap-4"
					>
						<div
							className="bg-red-500 min-w-[40%] rounded-2xl bg-cover bg-no-repeat bg-center"
							style={{ backgroundImage: `url(${o.image})` }}
						/>

						<div className="flex flex-col justify-between">
							<div>
								<span className="text-black/60 font-normal font-['Inter']">
									{o.category}
								</span>
								<h1 className="text-black/80 font-bold text-2xl font-['Inter']">
									{o.title}
								</h1>
								<p className="text-black/60 font-normal mt-3 font-['Inter']">
									{o.description}
								</p>
							</div>
							<button className="mt-7 w-36 h-14 px-6 py-4 bg-blue-700 rounded-full justify-center items-center">
								<div className="text-white text-base font-normal font-['Inter']">
									Book Now
								</div>
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Offers;
