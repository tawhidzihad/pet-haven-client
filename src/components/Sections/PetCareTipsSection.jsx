import { Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const PetCareTipsSection = () => {
	return (
		<div className="bg-[#002449] dark:bg-black py-15">
			<div className="relative h-[170vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
				<div className="absolute inset-0">
					<Image
						src="/petcaretips.avif"
						className="h-full w-full object-cover opacity-30"
						alt="petcaretips background"
						width={900}
						height={900}
						loading="eager"
					/>
				</div>

				<div className="max-w-7xl mx-auto py-10 space-y-6 lg:space-y-10 px-5 md:px-0">
					<div className="text-center">
						<Chip color="accent">Pet Care Tips</Chip>
					</div>

					<div className="text-center space-y-2">
						<h2 className="text-4xl md:text-5xl text-blue-500 font-bold">
							Keep Your <span className="text-white">Pets </span>
							Happy & Healthy
						</h2>
						<p className="text-[15px] md:text-lg text-slate-500 dark:text-white/60 md:max-w-2xl mx-auto leading-relaxed font-medium">
							Learn practical tips about nutrition, health, grooming, and
							daily care to ensure your pets live a healthy and joyful
							life.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-6 p-10">
						{/* Card 1 */}
						<div className="border p-5 flex rounded-2xl flex-col justify-center items-center gap-5">
							<div className="border border-zinc-600 p-2 rounded-full">
								<Icon
									icon={"ep:food"}
									width={50}
									height={50}
									className="text-white"
								/>
							</div>
							<div className="text-center space-y-3">
								<h3 className="text-blue-600 font-bold">
									1. Nutritious Food
								</h3>
								<p className="text-xs text-white/80">
									Feed a balanced diet suitable for your pet&apos;s
									age, size, and breed. Fresh water should always be
									available.
								</p>
							</div>
						</div>

						{/* Card 2 */}
						<div className="border p-5 flex rounded-2xl flex-col justify-center items-center gap-5">
							<div className="border border-zinc-600 p-2 rounded-full">
								<Icon
									icon={"tabler:exercise-ball"}
									width={50}
									height={50}
									className="text-white"
								/>
							</div>
							<div className="text-center space-y-3">
								<h3 className="text-orange-600 font-bold">
									2. Regular Exercise
								</h3>
								<p className="text-xs text-white/80">
									Daily exercise keeps your pet physically fit and
									mentally stimulated. Play, walk, and have fun
									together!
								</p>
							</div>
						</div>

						{/* Card 3 */}
						<div className="border p-5 flex rounded-2xl flex-col justify-center items-center gap-5">
							<div className="border border-zinc-600 p-2 rounded-full">
								<Icon
									icon={"map:veterinary-care"}
									width={50}
									height={50}
									className="text-white"
								/>
							</div>
							<div className="text-center space-y-3">
								<h3 className="text-white font-bold">
									3. Routine Health Care
								</h3>
								<p className="text-xs text-white/80">
									Regular vet check-ups, vaccinations, and de-worming
									help prevent illnesses and ensure a long life.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PetCareTipsSection;
