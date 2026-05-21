import MyListingPetCard from "@/components/MyListingPetCard";
import { getMyPets } from "@/lib/apiService";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyListingsPage = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});
	const user = session?.user;

	const allPets = await getMyPets(user?.id);

	const available = allPets.filter((pet) => pet.adopted === false);
	const adopted = allPets.filter((pet) => pet.adopted !== false);

	return (
		<>
			{allPets.length === 0 ? (
				<div className="flex flex-col items-center justify-center h-full text-center gap-4">
					<h2 className="text-2xl font-semibold text-blue-500">
						No Pets Listed Yet
					</h2>

					<p className="max-w-md text-muted">
						You haven’t added any pets for adoption yet. Start by creating
						your first pet listing.
					</p>
				</div>
			) : (
				<div className="space-y-10 max-w-7xl mx-auto">
					<h1 className="text-2xl md:text-4xl font-bold text-blue-500 text-center pt-4">
						List of your <span className="text-white">pets</span>
					</h1>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
						<div className="flex flex-col justify-center items-center gap-4 border border-blue-500/40 rounded-2xl p-5">
							<h3 className="text-2xl text-blue-500 font-medium">
								Total Listings
							</h3>
							<p className="text-3xl text-blue-500 font-bold">
								{allPets.length}
							</p>
						</div>

						<div className="flex flex-col justify-center items-center gap-4 border border-green-500/40 rounded-2xl p-5">
							<h3 className="text-2xl text-green-500 font-medium">
								Available
							</h3>
							<p className="text-3xl text-green-500 font-bold">
								{available.length}
							</p>
						</div>

						<div className="flex flex-col justify-center items-center gap-4 border border-red-500/40 rounded-2xl p-5">
							<h3 className="text-2xl text-red-500 font-medium">
								Adopted
							</h3>
							<p className="text-3xl text-red-500 font-bold">
								{adopted.length}
							</p>
						</div>
					</div>

					<div className="grid md:grid-cols-3 gap-5 md:gap-3">
						{allPets.map((pet) => (
							<MyListingPetCard
								key={pet._id}
								pet={pet}
							></MyListingPetCard>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default MyListingsPage;
