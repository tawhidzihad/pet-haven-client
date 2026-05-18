import BannerSection from "@/components/Sections/BannerSection";
import PetCareTipsSection from "@/components/Sections/PetCareTipsSection";
import SuccessStories from "@/components/Sections/SuccessStories";
import WhyAdoptPets from "@/components/Sections/WhyAdoptPets";

export default function Home() {
	return (
		<>
			<BannerSection></BannerSection>
			{/* Featured Section */}
			<WhyAdoptPets></WhyAdoptPets>
			<SuccessStories></SuccessStories>
			<PetCareTipsSection></PetCareTipsSection>
		</>
	);
}
