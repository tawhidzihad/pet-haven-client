import { getThisPet } from "@/lib/apiService";

const PetDetailsPage = async ({ params }) => {
	const { id } = await params;
	const pet = await getThisPet(id);

	return <div>PetDetailsPage</div>;
};

export default PetDetailsPage;
