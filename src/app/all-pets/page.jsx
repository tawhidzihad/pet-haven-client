import PetCard from "@/components/PetCard";
import { getPets } from "@/lib/apiService";

const AllPetsPage = async () => {
	const pets = await getPets();

	return (
		<div className="bg-[#002449] dark:bg-black py-20 px-5 lg:px-0">
			<div className="max-w-7xl mx-auto space-y-15">
				<div className="text-center space-y-4">
					<h2 className="text-3xl md:text-5xl text-blue-500 font-bold">
						Find Pets for Adoption
					</h2>
					<p className="text-[15px] md:text-lg text-slate-500 dark:text-white/60 md:max-w-xl mx-auto leading-relaxed font-medium">
						Browse through all available pets and discover your perfect
						furry companion.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{pets.map((pet) => (
						<PetCard key={pet._id} pet={pet}></PetCard>
					))}
				</div>
			</div>
		</div>
	);
};

export default AllPetsPage;
