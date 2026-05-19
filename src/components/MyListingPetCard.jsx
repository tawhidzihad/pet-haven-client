import DeleteModal from "@/UI/DeleteModal";
import { Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { BiEdit } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";

const MyListingPetCard = ({ pet }) => {
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
	} = pet;

	return (
		<div className="bg-blue-950 text-white rounded-xl flex flex-col justify-between overflow-hidden group">
			<div className="relative overflow-hidden">
				<Image
					src={imageUrl}
					alt={petName}
					width={100}
					height={100}
					className="h-40 w-full object-cover group-hover:scale-108 transition-all duration-400 ease-in-out"
				/>
				<span className="absolute bottom-2 right-2">
					<Chip color="accent">{`${"0 Request"}`}</Chip>
				</span>
			</div>

			<div className="px-3 py-5 space-y-2">
				<div className="flex items-center justify-between">
					<h2 className="font-semibold flex gap-2 items-center">
						<Icon icon={"streamline-plump:pet-paw"} />
						{petName}
					</h2>

					<p className="font-mono">${adoptionFee}</p>
				</div>

				<div className="flex items-center gap-2">
					<p className="text-xs text-blue-500">{species}</p>
					<span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
					<p className="text-xs text-blue-500">{breed}</p>
				</div>

				<div className="grid grid-cols-2 gap-3 mt-3">
					<Button
						size="sm"
						variant="outline"
						className={"w-full text-white font-normal"}
					>
						<FaRegEye />
						View
					</Button>
					<Button
						size="sm"
						variant="outline"
						className={"w-full text-white font-normal"}
					>
						<BiEdit />
						Edit
					</Button>
					<Button
						size="sm"
						variant="secondary"
						className={"w-full font-normal"}
					>
						<IoPeople />
						Requests
					</Button>

					<DeleteModal pet={pet}></DeleteModal>
				</div>
			</div>
		</div>
	);
};

export default MyListingPetCard;
