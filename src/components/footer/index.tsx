import React from "react";

import FacebookIcon from "../../assets/images/footer/facebook.svg";
import InstagramIcon from "../../assets/images/footer/instagram.svg";
import TwitterIcon from "../../assets/images/footer/twitter.svg";
import YoutubeIcon from "../../assets/images/footer/youtube.svg";

const Footer: React.FC = () => {
	return (
		<div className="mt-24 w-full bg-[#141414] flex gap-5 p-12">
			<div className="basis-1/4 flex justify-center">
				<h1 className="text-white text-3xl font-bold font-['Inter']">Trxvl.</h1>
			</div>

			<div className="flex flex-col w-full">
				<div className="flex flex-1">
					<ul className="flex basis-1/4 flex-col gap-3">
						<li className="text-[#808080] font-medium cursor-pointer text-xs font-['Inter'] hover:text-white">
							Selsendirme Ve Alt Jazz
						</li>
						<li className="text-[#808080] font-medium cursor-pointer text-xs font-['Inter'] hover:text-white">
							Media Market
						</li>
						<li className="text-[#808080] font-medium cursor-pointer text-xs font-['Inter'] hover:text-white">
							Gillie
						</li>
						<li className="text-[#808080] font-medium cursor-pointer text-xs font-['Inter'] hover:text-white">
							Size Last
						</li>
					</ul>

					<ul className="flex basis-1/4 flex-col gap-3">
						<li className="text-[#808080] font-medium cursor-pointer text-xs font-['Inter'] hover:text-white">
							Selsendirme Ve Alt Jazz
						</li>
						<li className="text-[#808080] font-medium cursor-pointer text-xs font-['Inter'] hover:text-white">
							Media Market
						</li>
						<li className="text-[#808080] font-medium cursor-pointer text-xs font-['Inter'] hover:text-white">
							Gillie
						</li>
						<li className="text-[#808080] font-medium cursor-pointer text-xs font-['Inter'] hover:text-white">
							Size Last
						</li>
					</ul>

					<ul className="flex basis-1/4 flex-col gap-3">
						<li className="text-[#808080] font-medium cursor-pointer text-xs font-['Inter'] hover:text-white">
							Selsendirme Ve Alt Jazz
						</li>
						<li className="text-[#808080] font-medium cursor-pointer text-xs font-['Inter'] hover:text-white">
							Media Market
						</li>
						<li className="text-[#808080] font-medium cursor-pointer text-xs font-['Inter'] hover:text-white">
							Gillie
						</li>
						<li className="text-[#808080] font-medium cursor-pointer text-xs font-['Inter'] hover:text-white">
							Size Last
						</li>
					</ul>

					<ul className="flex basis-1/4 flex-col gap-3">
						<li className="text-[#808080] font-medium cursor-pointer text-xs font-['Inter'] hover:text-white">
							Selsendirme Ve Alt Jazz
						</li>
						<li className="text-[#808080] font-medium cursor-pointer text-xs font-['Inter'] hover:text-white">
							Media Market
						</li>
						<li className="text-[#808080] font-medium cursor-pointer text-xs font-['Inter'] hover:text-white">
							Gillie
						</li>
						<li className="text-[#808080] font-medium cursor-pointer text-xs font-['Inter'] hover:text-white">
							Size Last
						</li>

						<div className="flex gap-5 mt-16">
							<img src={FacebookIcon} className="h-8 opacity-25" />
							<img src={InstagramIcon} className="h-8 opacity-25" />
							<img src={TwitterIcon} className="h-8 opacity-25" />
							<img src={YoutubeIcon} className="h-8 opacity-25" />
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
