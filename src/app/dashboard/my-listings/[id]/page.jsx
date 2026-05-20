import PetDataUpdateForm from "@/components/PetDataUpdateForm";
import { getThisPet } from "@/lib/apiService";

const PetEditPage = async ({ params }) => {
	const { id } = await params;
	const pet = await getThisPet(id);

	return (
		<div>
			<div className="text-center py-5">
				<h1 className="text-2xl md:text-4xl font-bold text-blue-500">
					Edit Pet Details
				</h1>
			</div>

			<PetDataUpdateForm pet={pet}></PetDataUpdateForm>
		</div>
	);
};

export default PetEditPage;
