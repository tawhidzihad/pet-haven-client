import AdoptForm from "@/components/AdoptForm";
import { getThisPet } from "@/lib/apiService";
import { auth } from "@/lib/auth";
import { Chip } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import {
	FaCheckCircle,
	FaLongArrowAltLeft,
	FaRegCalendarAlt,
} from "react-icons/fa";
import { FiShield } from "react-icons/fi";
import { IoLocationOutline, IoWarningOutline } from "react-icons/io5";
import { LuDollarSign } from "react-icons/lu";
import { MdPerson, MdPets, MdVaccines } from "react-icons/md";

const PetDetailsPage = async ({ params }) => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});
	const user = session?.user;

	const { id } = await params;
	const pet = await getThisPet(id);

	const {
		_id,
		vaccinationStatus,
		userId,
		species,
		petName,
		ownerEmail,
		location,
		imageUrl,
		healthStatus,
		gender,
		description,
		breed,
		age,
		adoptionFee,
		adoptionRequest,
		adopted,
	} = pet;

	return (
		<div className="bg-[#002449] dark:bg-black py-10 px-5 lg:px-0">
			<div className="max-w-7xl mx-auto">
				{/* Back Button */}
				<div className="py-5 flex">
					<Link
						href={"/all-pets"}
						className="text-white flex items-center gap-2 hover:border-b"
					>
						<FaLongArrowAltLeft /> Back to All Pets
					</Link>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{/* Left Side - Pet Details */}
					<div>
						<div className="bg-blue-950 text-white rounded-xl flex flex-col justify-between overflow-hidden group">
							<div className="relative overflow-hidden">
								<Image
									src={imageUrl}
									alt={petName}
									width={400}
									height={400}
									loading="eager"
									className="h-90 w-full object-cover group-hover:scale-108 transition-all duration-400 ease-in-out"
								/>

								<div className="absolute bottom-3 right-3 backdrop-blur-md bg-black/40 px-4 py-2 rounded-xl border border-white/10">
									<p className="text-sm text-gray-300">Adoption Fee</p>
									<h2 className="text-3xl font-bold text-blue-500">
										${adoptionFee}
									</h2>
								</div>
							</div>

							<div className="p-5">
								{/* Name */}
								<h3 className="text-3xl md:text-5xl text-blue-500">
									{petName}
								</h3>

								{/* About Gender */}
								<div className="flex flex-wrap lg:flex-row items-center gap-3 mt-4">
									<Chip className="bg-blue-200 text-blue-600">
										{species}
									</Chip>

									<Chip className="border border-zinc-500 bg-blue-950 text-white">
										{breed}
									</Chip>

									<Chip className="border border-zinc-500 bg-blue-950 text-white">
										{`${age} years old`}
									</Chip>

									<Chip className="border border-zinc-500 bg-blue-950 text-white">
										{gender}
									</Chip>
								</div>

								{/* Full Details */}
								<div className="grid lg:grid-cols-2 gap-4 my-6">
									{/* Card 1 */}
									<div className="flex gap-4 bg-slate-900 p-2 rounded-xl">
										<div className="flex justify-center items-center">
											<div className="p-1 border rounded-full bg-blue-700">
												<MdPets className="h-7 w-auto text-orange-500" />
											</div>
										</div>

										<div>
											<p className="text-muted">Species</p>
											<h3 className="font-semibold">{species}</h3>
										</div>
									</div>

									{/* Card 2 */}
									<div className="flex gap-4 bg-slate-900 p-2 rounded-xl">
										<div className="flex justify-center items-center">
											<div className="p-1 border rounded-full bg-blue-700">
												<MdPets className="h-7 w-auto text-orange-500" />
											</div>
										</div>

										<div>
											<p className="text-muted">Breed</p>
											<h3 className="font-semibold">{breed}</h3>
										</div>
									</div>

									{/* Card 3 */}
									<div className="flex gap-4 bg-slate-900 p-2 rounded-xl">
										<div className="flex justify-center items-center">
											<div className="p-1 border rounded-full bg-blue-700">
												<FaRegCalendarAlt className="h-7 w-auto text-orange-500" />
											</div>
										</div>

										<div>
											<p className="text-muted">Age</p>
											<h3 className="font-semibold">{age} years</h3>
										</div>
									</div>

									{/* Card 4 */}
									<div className="flex gap-4 bg-slate-900 p-2 rounded-xl">
										<div className="flex justify-center items-center">
											<div className="p-1 border rounded-full bg-blue-700">
												<MdPerson className="h-7 w-auto text-orange-500" />
											</div>
										</div>

										<div>
											<p className="text-muted">Gender</p>
											<h3 className="font-semibold">{gender}</h3>
										</div>
									</div>

									{/* Card 5 */}
									<div className="flex gap-4 bg-slate-900 p-2 rounded-xl">
										<div className="flex justify-center items-center">
											<div className="p-1 border rounded-full bg-blue-700">
												<IoLocationOutline className="h-7 w-auto text-orange-500" />
											</div>
										</div>

										<div>
											<p className="text-muted">Location</p>
											<h3 className="font-semibold">{location}</h3>
										</div>
									</div>

									{/* Card 6 */}
									<div className="flex gap-4 bg-slate-900 p-2 rounded-xl">
										<div className="flex justify-center items-center">
											<div className="p-1 border rounded-full bg-blue-700">
												<LuDollarSign className="h-7 w-auto text-orange-500" />
											</div>
										</div>

										<div>
											<p className="text-muted">Adoption Fee</p>
											<h3 className="font-semibold">
												{adoptionFee}
											</h3>
										</div>
									</div>

									{/* Card 7 */}
									<div className="flex gap-4 bg-slate-900 p-2 rounded-xl">
										<div className="flex justify-center items-center">
											<div className="p-1 border rounded-full bg-blue-700">
												<FiShield className="h-7 w-auto text-orange-500" />
											</div>
										</div>

										<div>
											<p className="text-muted">Health Status</p>
											<h3 className="font-semibold">
												{healthStatus}
											</h3>
										</div>
									</div>

									{/* Card 8 */}
									<div className="flex gap-4 bg-slate-900 p-2 rounded-xl">
										<div className="flex justify-center items-center">
											<div className="p-1 border rounded-full bg-blue-700">
												<MdVaccines className="h-7 w-auto text-orange-500" />
											</div>
										</div>

										<div>
											<p className="text-muted">Vaccinated</p>
											<h3 className="font-semibold">
												{`${vaccinationStatus === "Vaccinated" ? "Yes" : "No"}`}
											</h3>
										</div>
									</div>
								</div>

								{/* Pet Description */}
								<div>
									<h3 className="text-2xl font-semibold">
										About {petName}
									</h3>
									<p className="text-muted">{description}</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right Side - Adopt Form */}
					<div>
						{user.email === ownerEmail ? (
							<div className="flex items-center justify-center">
								<div className="w-full rounded-3xl border border-blue-600/30 p-10 text-center">
									{/* Content */}
									<div className="space-y-2">
										{/* Icon */}
										<div className="flex justify-center items-center">
											<IoWarningOutline className="h-20 w-20 text-yellow-400" />
										</div>

										{/* Title */}
										<h2 className="text-3xl font-bold tracking-tight text-white">
											This is your listing
										</h2>

										{/* Description */}
										<p className="text-sm leading-relaxed text-slate-400">
											You cannot request adoption for your own pet
											listing.
										</p>
									</div>
								</div>
							</div>
						) : adopted ? (
							<div className="flex items-center justify-center">
								<div className="w-full rounded-3xl border border-blue-600/30 p-10 text-center">
									{/* Content */}

									<div className="space-y-2">
										{/* Icon */}
										<div className="flex justify-center items-center">
											<FaCheckCircle className="h-15 w-15 text-red-500" />
										</div>

										{/* Title */}
										<h2 className="text-3xl font-semibold tracking-tight text-white">
											{petName} has been adopted
										</h2>

										{/* Description */}
										<p className="text-sm leading-relaxed text-slate-400">
											This lovely pet has already found a new home
										</p>
									</div>
								</div>
							</div>
						) : (
							<AdoptForm pet={pet} user={user}></AdoptForm>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PetDetailsPage;
