import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NextThemeProvider from "@/providers/NextThemeProvider";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
	title: "PetHaven | Find Your Perfect Pet Companion",
	description:
		"PetHaven is a modern pet adoption platform where you can explore pets, submit adoption requests, and give loving animals a forever home safely and easily.",

	keywords: [
		"PetHaven",
		"Pet Adoption",
		"Adopt Pets",
		"Dogs Adoption",
		"Cats Adoption",
		"Pet Care",
		"Animal Shelter",
		"Pet Marketplace",
		"Pet Adoption Platform",
		"MERN Stack Project",
		"Next.js Website",
		"Pet Listings",
		"Adopt a Pet",
		"Pet Lovers",
	],
};

export default function RootLayout({ children }) {
	return (
		<html
			suppressHydrationWarning
			lang="en"
			className={`${poppins.className}  h-full antialiased`}
		>
			<body className="min-h-full flex flex-col bg-background text-foreground">
				<NextThemeProvider>
					<Navbar></Navbar>
					<main>{children}</main>
					<Footer></Footer>
				</NextThemeProvider>
			</body>
		</html>
	);
}
