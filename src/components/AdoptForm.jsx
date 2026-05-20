"use client";

import {
	Button,
	Card,
	FieldError,
	Input,
	Label,
	TextArea,
	TextField,
} from "@heroui/react";

const AdoptForm = ({ pet }) => {
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
		const petData = {
			...Object.fromEntries(fromData.entries()),
			adopted: false,
			adoptionRequest: 0,
			userId: "1234245",
		};
	};

	return (
		<>
			<Card className="rounded-xl">
				<form className="md:p-10 space-y-8" onSubmit={onSubmit}>
					<div className="grid grid-cols-1 gap-8">
						{/* Pet Name */}
						<TextField name="petName" isRequired>
							<Label>Pet Name</Label>
							<Input className="rounded-2xl" value={petName} readOnly />
							<FieldError />
						</TextField>

						{/* User Name*/}
						<TextField name="userName" isRequired>
							<Label>Your Name</Label>
							<Input
								value={"User Name"}
								readOnly
								className="rounded-2xl"
							/>
							<FieldError />
						</TextField>

						{/* Owner Email */}
						<TextField name="userEmail" isRequired>
							<Label>Your Email</Label>
							<Input
								type="email"
								className="rounded-2xl"
								value={"hfztauhid@gmail.com"}
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

						{/* Description */}
						<TextField name="description" isRequired>
							<Label>Description</Label>
							<TextArea
								placeholder={`Tell the owner why you'd be a great match for ${petName} ...`}
								className="rounded-xl"
							/>
							<FieldError />
						</TextField>
					</div>

					{/* Pet Add Button */}
					<Button
						type="submit"
						className=" rounded-full w-full bg-blue-500 text-white font-normal"
					>
						{`Adopt ${petName}`}
					</Button>
				</form>
			</Card>
		</>
	);
};

export default AdoptForm;
