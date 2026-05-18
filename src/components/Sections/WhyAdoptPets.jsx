import { Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

const WhyAdoptPets = () => {
	return (
		<div className="bg-[#002449] dark:bg-black py-10 px-5 lg:px-0">
			<div className="max-w-7xl mx-auto space-y-15">
				<div className="text-center">
					<Chip className="text-blue-500">Why Adopt Pets?</Chip>
				</div>
				<div className="text-center space-y-4">
					<h2 className="text-4xl md:text-5xl text-blue-500 font-bold">
						<span className="text-white">Adoption</span> Creates Lifelong
						Bonds!
					</h2>
					<p className="text-[15px] md:text-lg text-slate-500 dark:text-white/60 md:max-w-2xl mx-auto leading-relaxed font-medium">
						Adopting a pet not only saves lives but also brings joy,
						companionship, and unconditional love into your home.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					<div className="text-center border p-8 space-y-5 rounded-2xl bg-blue-900/30 hover:scale-98 transition-all duration-300">
						<div className="flex justify-center">
							<Icon
								icon={"mdi:heart"}
								width={100}
								height={100}
								className="text-white bg-blue-500 rounded-full p-2"
							/>
						</div>

						<div className="space-y-4">
							<h3 className="text-blue-500 text-2xl font-semibold">
								You Save a Life
							</h3>
							<p className="text-white/90 max-w-50 mx-auto">
								Adoption gives a homeless pet a second chance at a happy
								life.
							</p>
						</div>
					</div>

					<div className="text-center border p-8 space-y-5 rounded-2xl bg-blue-900/30 hover:scale-98 transition-all duration-300">
						<div className="flex justify-center">
							<Icon
								icon={"formkit:people"}
								width={100}
								height={100}
								className="text-white bg-orange-400 rounded-full p-2"
							/>
						</div>

						<div className="space-y-4">
							<h3 className="text-blue-500 text-2xl font-semibold">
								You Fight Overpopulation
							</h3>
							<p className="text-white/90 max-w-50 mx-auto">
								Adopting helps reduce the number of animals in shelters
								and the suffering on the streets.
							</p>
						</div>
					</div>

					<div className="text-center border p-8 space-y-5 rounded-2xl bg-blue-900/30 hover:scale-98 transition-all duration-300">
						<div className="flex justify-center">
							<Icon
								icon={"mingcute:love-fill"}
								width={100}
								height={100}
								className="text-white bg-rose-500 rounded-full p-2"
							/>
						</div>

						<div className="space-y-4">
							<h3 className="text-blue-500 text-2xl font-semibold">
								You Gain Unconditional Love
							</h3>
							<p className="text-white/90 max-w-50 mx-auto">
								Adopted pets are incredibly loving, loyal, and forever
								grateful.
							</p>
						</div>
					</div>

					<div className="text-center border p-8 space-y-5 rounded-2xl bg-blue-900/30 hover:scale-98 transition-all duration-300">
						<div className="flex justify-center">
							<Icon
								icon={"hugeicons:save-money-dollar"}
								width={100}
								height={100}
								className="text-white bg-orange-400 rounded-full p-2"
							/>
						</div>

						<div className="space-y-4">
							<h3 className="text-blue-500 text-2xl font-semibold">
								It&apos;s Cost-Effective
							</h3>
							<p className="text-white/90 max-w-50 mx-auto">
								Adoption fees are usually lower than buying, and pets
								are often spayed/neutered and vaccinated.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyAdoptPets;
