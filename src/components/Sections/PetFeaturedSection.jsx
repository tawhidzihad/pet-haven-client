import { getAllPets } from "@/lib/apiService";
import { Button, Chip } from "@heroui/react";
import Link from "next/link";
import PetCard from "../PetCard";

const PetFeaturedSection = async () => {
	const allPets = await getAllPets();

	return (
		<div className="bg-[#002449] dark:bg-black py-10 md:py-13 px-5 lg:px-0">
			<div className="max-w-7xl mx-auto space-y-5">
				<div className="text-center">
					<Chip className="text-blue-500">Pets Looking for a Home</Chip>
				</div>

				<div className="text-center space-y-4">
					<h2 className="text-4xl md:text-5xl text-blue-500 font-bold">
						These <span className="text-white">Pets</span> Are Waiting for
						You
					</h2>
					<p className="text-[15px] md:text-lg text-slate-500 dark:text-white/60 md:max-w-2xl mx-auto leading-relaxed font-medium">
						Explore our hand-picked pets currently available for adoption.
						Each one is looking for a caring and loving family.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
					{allPets.slice(0, 6).map((pet) => (
						<PetCard key={pet._id} pet={pet}></PetCard>
					))}
				</div>

				<div className="flex justify-center items-center mt-10">
					<Link href={"/all-pets"}>
						<Button
							className={
								"bg-blue-500 rounded hover:bg-blue-900 hover:scale-97 transition-all duration-300 ease-in-out"
							}
						>
							Browse More
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PetFeaturedSection;
