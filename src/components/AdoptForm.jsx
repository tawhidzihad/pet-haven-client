"use client";

import {
	adoptionRequestCountPlus,
	createAdoptionRequest,
} from "@/lib/apiService";
import {
	Button,
	Card,
	FieldError,
	Input,
	Label,
	TextArea,
	TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";

const AdoptForm = ({ pet, user }) => {
	const [isSubmited, setSubmited] = useState(false);

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

	const onSubmit = async (e) => {
		e.preventDefault();
		const fromData = new FormData(e.currentTarget);
		const adoptionRequestData = {
			...Object.fromEntries(fromData.entries()),
			petId: _id,
			requestedDate: new Date(),
			adopted: null,
			userName: user?.name,
			userEmail: user?.email,
			userId: user?.id,
		};
		const data = await createAdoptionRequest(adoptionRequestData);
		await adoptionRequestCountPlus(_id);

		if (data.insertedId) {
			setSubmited(true);
			toast.success("Adoption request submitted successfully!");
		}
	};

	return (
		<>
			{!isSubmited ? (
				<Card className="rounded-xl">
					<form className="md:p-10 space-y-8" onSubmit={onSubmit}>
						<div className="grid grid-cols-1 gap-8">
							{/* Pet Name */}
							<TextField name="petName" isRequired>
								<Label>Pet Name</Label>
								<Input
									className="rounded-2xl"
									value={petName}
									readOnly
								/>
								<FieldError />
							</TextField>

							{/* User Name*/}
							<TextField name="userName" isRequired>
								<Label>Your Name</Label>
								<Input
									value={user?.name}
									readOnly
									className="rounded-2xl"
								/>
								<FieldError />
							</TextField>

							{/* Your Email */}
							<TextField name="userEmail" isRequired>
								<Label>Your Email Address</Label>
								<Input
									type="email"
									className="rounded-2xl"
									value={user?.email}
									readOnly
								/>
								<FieldError />
							</TextField>

							{/* Pickup Date */}
							<TextField name="pickupDate" type="date" isRequired>
								<Label>Pickup Date</Label>
								<Input type="date" className="rounded-2xl" />
								<FieldError />
							</TextField>

							{/* Your Message */}
							<TextField name="userMessage" isRequired>
								<Label>Your Message</Label>
								<TextArea
									placeholder={`Tell the owner why you'd be a great match for ${petName} ...`}
									className="rounded-xl"
								/>
								<FieldError />
							</TextField>
						</div>

						{/* Pet Addopt Button */}
						<Button
							type="submit"
							className=" rounded-full w-full bg-blue-500 text-white font-normal"
						>
							{`Adopt ${petName}`}
						</Button>
					</form>
				</Card>
			) : (
				// <Card className="rounded-xl p-10 text-center space-y-4">
				// 	<h2 className="text-2xl font-semibold text-green-500">
				// 		Request Submitted Successfully
				// 	</h2>

				// 	<p className="text-default-500">
				// 		Your adoption request for Duke has been sent to the owner. You
				// 		can track its status in My Requests.
				// 	</p>
				// </Card>

				<div className="flex items-center justify-center">
					<div className="w-full rounded-3xl border border-blue-600/30 p-10 text-center">
						{/* Content */}

						<div className="space-y-2">
							{/* Icon */}
							<div className="flex justify-center items-center">
								<FaCheckCircle className="h-15 w-15 text-green-500" />
							</div>

							{/* Title */}

							<h2 className="text-2xl font-semibold text-green-500">
								Request Submitted!
							</h2>

							{/* Description */}
							<p className="text-sm leading-relaxed text-slate-400">
								Your adoption request for {petName} has been sent to the
								owner. You can track status in My Requests.
							</p>

							{/* My Requests Btn */}
							<Link href={"/dashboard/my-request"}>
								<Button
									variant="outline"
									size="sm"
									className={"text-white"}
								>
									View My Requests
								</Button>
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default AdoptForm;
