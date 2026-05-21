import FilterPortion from "@/components/FilterPortion";
import PetCard from "@/components/PetCard";
import SearchModal from "@/components/SearchPortion";
import { getAllPets } from "@/lib/apiService";

const AllPetsPage = async ({ searchParams }) => {
	const params = await searchParams;

	const pets = await getAllPets(params?.search, params?.category);

	return (
		<div className="bg-[#002449] dark:bg-black py-6 md:py-20 px-5 lg:px-0">
			<div className="max-w-7xl mx-auto space-y-5">
				<div className="text-center space-y-4">
					<h2 className="text-3xl md:text-5xl text-blue-500 font-bold">
						Find Pets for Adoption
					</h2>
					<p className="text-[15px] md:text-lg text-slate-500 dark:text-white/60 md:max-w-xl mx-auto leading-relaxed font-medium">
						Browse through all available pets and discover your perfect
						furry companion.
					</p>
				</div>

				<div className="grid grid-cols-2 gap-5">
					<div className="md:flex col-span-2 md:col-span-1">
						<SearchModal></SearchModal>
					</div>
					<div className="flex justify-start md:justify-end col-span-2 md:col-span-1">
						<FilterPortion></FilterPortion>
					</div>
				</div>

				<>
					{pets.length === 0 ? (
						<div className="text-center py-15">
							<h1 className="text-white text-2xl font-bold">
								No data Fount
							</h1>
						</div>
					) : (
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{pets.map((pet) => (
								<PetCard key={pet._id} pet={pet}></PetCard>
							))}
						</div>
					)}
				</>
			</div>
		</div>
	);
};

export default AllPetsPage;
