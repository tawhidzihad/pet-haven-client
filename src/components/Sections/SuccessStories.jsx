import { Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const SuccessStories = () => {
	return (
		<div className="bg-[#002449] dark:bg-black py-10 px-5 lg:px-0">
			<div className="max-w-7xl mx-auto space-y-15">
				<div className="text-center">
					<Chip color="success">Success Stories</Chip>
				</div>

				<div className="grid gap-5 lg:gap-0 md:grid-cols-2">
					<div className="flex justify-center items-center">
						<div className="overflow-hidden rounded-4xl opacity-80">
							<Image
								src={"/success-stories.avif"}
								alt="Success Stories Banner"
								width={360}
								height={360}
								className="h-115 w-auto hover:scale-105 transition-all duration-500"
							/>
						</div>
					</div>

					<div className="space-y-4">
						<div>
							<h2 className="text-4xl md:text-5xl text-blue-500 font-bold">
								Every <span className="text-white">Adoption</span> Has a
								Story!
							</h2>
							<p className="text-[15px] md:text-lg text-slate-500 dark:text-white/60 md:max-w-2xl mx-auto leading-relaxed font-medium">
								See how adoption has transformed the lives of pets and
								their new families through heartwarming success stories.
							</p>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
							{/* Success Stories 1 */}
							<div className="border border-slate-600 pt-3 px-3 bg-blue-900/30 hover:scale-101 transition-all duration-300 ease-in-out rounded-xl flex flex-col justify-between">
								<div className="flex gap-4">
									<div className="w-full md:w-2/4 opacity-80">
										<Image
											src={"/success-pet-1.avif"}
											alt="Successfully Adopted Pet"
											width={100}
											height={100}
											className="h-50 w-auto rounded"
										/>
									</div>
									<div className="w-full md:w-2/4 space-y-3">
										<h3 className="text-lg font-bold text-blue-500 leading-5">
											From Abandoned to Adored
										</h3>
										<p className="text-[13px] font-normal text-white/60 italic">
											Buno was found on the streets, scared and
											alone. Today, he&apos;s living his best
											life-full of love, playtime, and belly rubs!
										</p>
									</div>
								</div>

								<div className="border-t border-zinc-500 mt-2 py-3 flex items-center gap-3">
									<div className="border border-zinc-600 p-2 rounded-full">
										<Icon
											icon={"streamline:pet-paw-solid"}
											width={20}
											height={20}
											className="text-white/70"
										/>
									</div>
									<div>
										<h4 className="text-white/80 uppercase">Buno</h4>
										<p className="text-blue-500/80 text-xs">
											Adopted in 2024
										</p>
									</div>
								</div>
							</div>

							{/* Success Stories 2 */}
							<div className="border border-slate-600 pt-3 px-3 bg-blue-900/30 hover:scale-101 transition-all duration-300 ease-in-out rounded-xl md:hidden lg:flex flex-col justify-between">
								<div className="flex gap-4">
									<div className="w-full md:w-2/4 opacity-80">
										<Image
											src={"/success-pet-2.avif"}
											alt="Successfully Adopted Pet"
											width={100}
											height={100}
											className="h-50 w-auto rounded"
										/>
									</div>
									<div className="w-full md:w-2/4 space-y-3">
										<h3 className="text-lg font-bold text-blue-500 leading-5">
											A Bond That Heals
										</h3>
										<p className="text-[13px] font-normal text-white/60 italic">
											After a tough past, Oreo found more than a
											home- he found a friend who heals with him,
											every day.
										</p>
									</div>
								</div>

								<div className="border-t border-zinc-500 mt-2 py-3 flex items-center gap-3">
									<div className="border border-zinc-600 p-2 rounded-full">
										<Icon
											icon={"streamline:pet-paw-solid"}
											width={20}
											height={20}
											className="text-white/70"
										/>
									</div>
									<div>
										<h4 className="text-white/80 uppercase">Oreo </h4>
										<p className="text-blue-500/80 text-xs">
											Adopted in 2026
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SuccessStories;
