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

const AdoptForm = ({ pet, user }) => {
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

	// console.log(user);

	const onSubmit = async (e) => {
		e.preventDefault();
		const fromData = new FormData(e.currentTarget);
		const petData = {
			...Object.fromEntries(fromData.entries()),
			userName: user?.name,
			userEmail: user?.email,
			userId: user?.id,
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
								value={user?.name}
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
