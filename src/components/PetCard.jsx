import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { LuDollarSign } from "react-icons/lu";

const PetCard = ({ pet }) => {
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
	} = pet;

	return (
		<div className="bg-blue-950 text-white rounded-xl flex flex-col justify-between overflow-hidden group">
			<div className="relative overflow-hidden">
				<Image
					src={imageUrl}
					alt={petName}
					width={100}
					height={100}
					className="h-60 w-full object-cover group-hover:scale-108 transition-all duration-400 ease-in-out"
				/>
				<span className="absolute top-2 left-2">
					<Chip color="success" className="bg-blue-600">
						<Chip.Label className="text-white text-sm">
							{species}
						</Chip.Label>
					</Chip>
				</span>
			</div>

			<div className="p-5 space-y-2 border-b border-zinc-500">
				<h3 className="text-2xl">{petName}</h3>

				<div className="flex items-center text-xs lg:text-[16px] gap-2">
					<p className="text-zinc-400">{breed}</p>
					<span className="h-2 w-2 bg-zinc-400 rounded-full"></span>
					<p className="text-zinc-400">{`${age} years old`}</p>
					<span className="h-2 w-2 bg-zinc-400 rounded-full"></span>
					<p className="text-zinc-400">{gender}</p>
				</div>

				<p className="text-zinc-400 text-xl flex items-center gap-2 font-medium">
					<FaLocationDot className="text-blue-500" /> {location}
				</p>

				<p className="text-white text-xl flex items-center gap-2 font-medium">
					<LuDollarSign className="text-blue-500" />
					{adoptionFee}
				</p>
			</div>

			<div className="p-5 grid grid-cols-2 gap-4">
				<Link href={`/all-pets/${_id}`}>
					<Button
						variant="outline"
						className={"w-full text-white font-normal"}
					>
						View Details
					</Button>
				</Link>
				<Button
					className={"w-full bg-linear-to-tl from-blue-300 to-blue-500"}
				>
					Adopt Now
				</Button>
			</div>
		</div>
	);
};

export default PetCard;
