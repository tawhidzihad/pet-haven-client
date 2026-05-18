import { Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { FaArrowDownLong, FaArrowRightLong } from "react-icons/fa6";

const AdoptionProcess = () => {
	return (
		<div className="bg-[#002449] dark:bg-black py-15 px-5 lg:px-0">
			<div className="max-w-7xl mx-auto space-y-15">
				<div className="text-center space-y-4">
					<div className="text-center">
						<Chip className="text-blue-500">Adoption Process</Chip>
					</div>
					<h2 className="text-4xl md:text-6xl text-blue-500 font-bold">
						<span className="text-white">How</span> It Works?
					</h2>
				</div>

				{/* Card Container */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{/* Card 1 */}
					<div className="text-center p-8 space-y-5 rounded-2xl hover:scale-98 transition-all duration-300 relative">
						<div className="flex justify-center">
							<Icon
								icon={"tabler:number-1"}
								width={100}
								height={100}
								className="text-white"
							/>
						</div>

						<div className="space-y-4">
							<h3 className="text-blue-500 text-2xl font-semibold">
								Find a Pet
							</h3>
							<p className="text-white/90 max-w-50 mx-auto">
								Browse pets and find your perfect companion.
							</p>
						</div>

						<span className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-5">
							<FaArrowRightLong className="h-6 w-auto text-white" />
						</span>
						<span className="block md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
							<FaArrowDownLong className="h-6 w-auto text-white" />
						</span>
					</div>

					{/* Card 2 */}
					<div className="text-center p-8 space-y-5 rounded-2xl hover:scale-98 transition-all duration-300 relative">
						<div className="flex justify-center">
							<Icon
								icon={"tabler:number-2"}
								width={100}
								height={100}
								className="text-white"
							/>
						</div>

						<div className="space-y-4">
							<h3 className="text-blue-500 text-2xl font-semibold">
								Apply
							</h3>
							<p className="text-white/90 max-w-50 mx-auto">
								Submit an adoption application and tell us about
								yourself.
							</p>
						</div>

						<span className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-5">
							<FaArrowRightLong className="h-6 w-auto text-white" />
						</span>
						<span className="block md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
							<FaArrowDownLong className="h-6 w-auto text-white" />
						</span>
					</div>

					{/* Card 3 */}
					<div className="text-center p-8 space-y-5 rounded-2xl hover:scale-98 transition-all duration-300 relative">
						<div className="flex justify-center">
							<Icon
								icon={"tabler:number-3"}
								width={100}
								height={100}
								className="text-white"
							/>
						</div>

						<div className="space-y-4">
							<h3 className="text-blue-500 text-2xl font-semibold">
								Meet & Connect
							</h3>
							<p className="text-white/90 max-w-50 mx-auto">
								Meet the pet and spend time to build a connection.
							</p>
						</div>

						<span className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-5">
							<FaArrowRightLong className="h-6 w-auto text-white" />
						</span>
						<span className="block md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
							<FaArrowDownLong className="h-6 w-auto text-white" />
						</span>
					</div>

					{/* Card 4 */}
					<div className="text-center p-8 space-y-5 rounded-2xl hover:scale-98 transition-all duration-300 relative">
						<div className="flex justify-center">
							<Icon
								icon={"tabler:number-4"}
								width={100}
								height={100}
								className="text-white"
							/>
						</div>

						<div className="space-y-4">
							<h3 className="text-blue-500 text-2xl font-semibold">
								Take Them Home
							</h3>
							<p className="text-white/90 max-w-50 mx-auto">
								Complete the adoption and welcome your new family member
								home!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdoptionProcess;
