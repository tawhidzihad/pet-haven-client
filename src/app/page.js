import AdoptionProcess from "@/components/Sections/AdoptionProcess";
import BannerSection from "@/components/Sections/BannerSection";
import PetCareTipsSection from "@/components/Sections/PetCareTipsSection";
import PetFeaturedSection from "@/components/Sections/PetFeaturedSection";
import SuccessStories from "@/components/Sections/SuccessStories";
import WhyAdoptPets from "@/components/Sections/WhyAdoptPets";
import WhyChooseUs from "@/components/Sections/WhyChooseUs";

export default function Home() {
	return (
		<>
			<BannerSection></BannerSection>
			<PetFeaturedSection></PetFeaturedSection>
			<WhyAdoptPets></WhyAdoptPets>
			<SuccessStories></SuccessStories>
			<PetCareTipsSection></PetCareTipsSection>
			<WhyChooseUs></WhyChooseUs>
			<AdoptionProcess></AdoptionProcess>
		</>
	);
}
