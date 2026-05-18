import { Icon } from "@iconify/react";

const WhyChooseUs = () => {
	return (
		<div className="bg-[#002449] dark:bg-black py-10 px-5 lg:px-0">
			<div className="max-w-7xl mx-auto space-y-10">
				<div className="text-center space-y-4">
					<h2 className="text-4xl md:text-7xl text-blue-500 font-bold">
						Why Choose <span className="text-white">Us</span>?
					</h2>
					<p className="text-[15px] md:text-lg text-slate-500 dark:text-white/60 md:max-w-2xl mx-auto leading-relaxed font-medium">
						We prioritize pet safety, verified listings, and secure
						adoption processes to create a trusted experience for
						everyone.
					</p>
				</div>

				<div className="flex flex-col md:flex-row justify-center items-center gap-4">
					{/* Card 1 */}
					<div className="hover:scale-105 transition-all duration-300 ease-in-out border border-zinc-700 rounded-xl p-5 w-60 flex flex-col justify-center items-center space-y-5">
						<Icon
							icon={"lets-icons:check-fill"}
							className="text-white bg-green-500 rounded-full"
							width={40}
							height={40}
						/>

						<h3 className="text-xl text-white">Trusted & Reliable</h3>
						<p className="text-white/60 text-center">
							We verify listings and partners to ensure safety and trust.
						</p>
					</div>

					{/* Card 2 */}
					<div className="hover:scale-105 transition-all duration-300 ease-in-out border border-zinc-700 rounded-xl p-5 w-60 flex flex-col justify-center items-center space-y-5">
						<p className="bg-blue-500 rounded-full p-2">
							<Icon
								icon={"iconoir:community"}
								className="text-white"
								width={40}
								height={40}
							/>
						</p>

						<h3 className="text-xl text-white">Community Driven</h3>
						<p className="text-white/60 text-center">
							We connect pet lovers, adopters, and shelters to build a
							stronger community.
						</p>
					</div>

					{/* Card 3 */}
					<div className="hover:scale-105 transition-all duration-300 ease-in-out border border-zinc-700 rounded-xl p-5 w-60 flex flex-col justify-center items-center space-y-5">
						<p className="bg-gray-500 rounded-full p-2">
							<Icon
								icon={"ph:hand-tap"}
								className="text-white"
								width={30}
								height={30}
							/>
						</p>

						<h3 className="text-xl text-white">Easy & User Friendly</h3>
						<p className="text-white/60 text-center">
							Our website is simple, smooth, and designed for everyone.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
