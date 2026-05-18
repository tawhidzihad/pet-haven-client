"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MdPets } from "react-icons/md";

const BannerSection = () => {
	return (
		<div className="bg-[#002449] dark:bg-black py-10 md:py-20 px-5 lg:px-0">
			<div className="max-w-7xl mx-auto grid gap-5 md:gap-0 md:grid-cols-2">
				<div className="order-2 md:order-1">
					<div className="space-y-6">
						<div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-[#001B37] px-4 py-2 backdrop-blur-sm">
							<div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />

							<span className="text-sm font-medium tracking-wide text-blue-500">
								Trusted Pet Adoption Platform
							</span>
						</div>

						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
							Find Your, <br />
							<span className="text-blue-500 border-b-2">
								New Best Friend
							</span>
						</h1>

						<p className="text-[16px] md:text-xl text-slate-500 dark:text-white/60 max-w-xl leading-relaxed font-medium">
							Discover loving pets waiting for a forever home. Browse
							verified listings, connect with pet owners, and make
							adoption simple, safe, and heartwarming.
						</p>

						<div>
							<Link href={"/all-pets"}>
								<Button
									className={
										"hover:scale-105 duration-500 transition-all ease-in-out"
									}
									variant="secondary"
									size="lg"
								>
									Adopt Now
									<MdPets />
								</Button>
							</Link>
						</div>
					</div>
				</div>

				<div className="order-1 md:order-2 flex justify-end">
					<motion.div
						animate={{
							y: [0, -10, 0],
							rotate: [0, 1, -1, 0],
							// scale: [1, 1.02, 1],
						}}
						transition={{
							duration: 5,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					>
						<Image
							src={"/banner.avif"}
							alt="Banner Image"
							width={500}
							height={500}
							className="h-60 lg:h-100 w-auto rounded-3xl opacity-80"
							loading="eager"
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default BannerSection;
