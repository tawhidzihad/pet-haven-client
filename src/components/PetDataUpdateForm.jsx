"use client";

import { editPetData } from "@/lib/apiService";
import {
	Button,
	Card,
	FieldError,
	Input,
	Label,
	ListBox,
	Select,
	TextArea,
	TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const PetDataUpdateForm = ({ pet }) => {
	const router = useRouter();

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

	const onSubmit = async (e) => {
		e.preventDefault();
		const fromData = new FormData(e.currentTarget);
		const petUpdatedData = Object.fromEntries(fromData.entries());
		const data = await editPetData(_id, petUpdatedData);

		if (data.modifiedCount) {
			toast.success("Pet information updated successfully.");
			router.push("/dashboard/my-listings");
		}
	};

	return (
		<>
			<Card className="rounded-xl">
				<form className="md:p-10 space-y-8" onSubmit={onSubmit}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* Pet Name */}
						<div className="md:col-span-2">
							<TextField
								name="petName"
								isRequired
								defaultValue={petName}
							>
								<Label>Pet Name</Label>
								<Input
									placeholder="Enter pet name"
									className="rounded-2xl"
								/>
								<FieldError />
							</TextField>
						</div>

						{/* Breed */}
						<TextField name="breed" isRequired defaultValue={breed}>
							<Label>Breed</Label>
							<Input
								placeholder="Enter pet breed"
								className="rounded-2xl"
							/>
							<FieldError />
						</TextField>

						{/* Species */}
						<div>
							<Select
								defaultValue={species}
								name="species"
								isRequired
								className="w-full"
								placeholder="Select Species"
							>
								<Label>Species</Label>

								<Select.Trigger className="rounded-2xl">
									<Select.Value />
									<Select.Indicator />
								</Select.Trigger>

								<Select.Popover>
									<ListBox>
										<ListBox.Item id="Dog" textValue="Dog">
											Dog
											<ListBox.ItemIndicator />
										</ListBox.Item>

										<ListBox.Item id="Cat" textValue="Cat">
											Cat
											<ListBox.ItemIndicator />
										</ListBox.Item>

										<ListBox.Item id="Bird" textValue="Bird">
											Bird
											<ListBox.ItemIndicator />
										</ListBox.Item>

										<ListBox.Item id="Hamster" textValue="Hamster">
											Hamster
											<ListBox.ItemIndicator />
										</ListBox.Item>

										<ListBox.Item id="Turtle" textValue="Turtle">
											Cultural
											<ListBox.ItemIndicator />
										</ListBox.Item>

										<ListBox.Item id="Rabbit" textValue="Rabbit">
											Rabbit
											<ListBox.ItemIndicator />
										</ListBox.Item>
									</ListBox>
								</Select.Popover>
							</Select>
						</div>

						{/* Gender */}
						<div>
							<Select
								name="gender"
								isRequired
								className="w-full"
								placeholder="Gender"
								defaultValue={gender}
							>
								<Label>Gender</Label>

								<Select.Trigger className="rounded-2xl">
									<Select.Value />
									<Select.Indicator />
								</Select.Trigger>

								<Select.Popover>
									<ListBox>
										<ListBox.Item id="Male" textValue="Male">
											Male
											<ListBox.ItemIndicator />
										</ListBox.Item>

										<ListBox.Item id="Female" textValue="Female">
											Female
											<ListBox.ItemIndicator />
										</ListBox.Item>
									</ListBox>
								</Select.Popover>
							</Select>
						</div>

						{/* Pet Age */}
						<TextField name="age" isRequired defaultValue={age}>
							<Label>Age</Label>
							<Input
								type="number"
								placeholder="e.g. 2 Years"
								className="rounded-2xl"
							/>
							<FieldError />
						</TextField>

						{/* Health Status*/}
						<div>
							<Select
								name="healthStatus"
								isRequired
								className="w-full"
								placeholder="Health Status"
								defaultValue={healthStatus}
							>
								<Label>Health Status</Label>

								<Select.Trigger className="rounded-2xl">
									<Select.Value />
									<Select.Indicator />
								</Select.Trigger>

								<Select.Popover>
									<ListBox>
										<ListBox.Item id="Healthy" textValue="Healthy">
											Healthy
											<ListBox.ItemIndicator />
										</ListBox.Item>

										<ListBox.Item id="Injured" textValue="Injured">
											Injured
											<ListBox.ItemIndicator />
										</ListBox.Item>

										<ListBox.Item
											id="Under Treatment"
											textValue="Under Treatment"
										>
											Under Treatment
											<ListBox.ItemIndicator />
										</ListBox.Item>
									</ListBox>
								</Select.Popover>
							</Select>
						</div>

						{/* Vaccination Status */}
						<div>
							<Select
								name="vaccinationStatus"
								isRequired
								className="w-full"
								placeholder="Vaccination Status"
								defaultValue={vaccinationStatus}
							>
								<Label>Vaccination Status</Label>

								<Select.Trigger className="rounded-2xl">
									<Select.Value />
									<Select.Indicator />
								</Select.Trigger>

								<Select.Popover>
									<ListBox>
										<ListBox.Item
											id="Vaccinated"
											textValue="Vaccinated"
										>
											Vaccinated
											<ListBox.ItemIndicator />
										</ListBox.Item>

										<ListBox.Item
											id="Not Vaccinated"
											textValue="Not Vaccinated"
										>
											Not Vaccinated
											<ListBox.ItemIndicator />
										</ListBox.Item>
									</ListBox>
								</Select.Popover>
							</Select>
						</div>

						{/* Adoption Fee */}
						<TextField
							name="adoptionFee"
							isRequired
							defaultValue={adoptionFee}
						>
							<Label>Adoption Fee</Label>
							<Input
								type="number"
								placeholder="e.g. $500"
								className="rounded-2xl"
							/>
							<FieldError />
						</TextField>

						{/* Location */}
						<TextField name="location" isRequired defaultValue={location}>
							<Label>Location</Label>
							<Input
								placeholder="Enter your location"
								className="rounded-2xl"
							/>
							<FieldError />
						</TextField>

						{/* Image URL */}
						<div className="md:col-span-2">
							<TextField
								name="imageUrl"
								isRequired
								defaultValue={imageUrl}
							>
								<Label>Image URL</Label>
								<Input
									type="url"
									placeholder="https://example.com/buno.jpg"
									className="rounded-2xl"
								/>
								<FieldError />
							</TextField>
						</div>

						{/* Description */}
						<div className="md:col-span-2">
							<TextField
								name="description"
								isRequired
								defaultValue={description}
							>
								<Label>Description</Label>
								<TextArea
									placeholder="Write short details about the pet"
									className="rounded-xl"
								/>
								<FieldError />
							</TextField>
						</div>
					</div>

					{/* Pet Add Button */}
					<Button
						type="submit"
						className=" rounded-full w-full bg-blue-500 text-white font-normal"
					>
						Save Changes
					</Button>
				</form>
			</Card>
		</>
	);
};

export default PetDataUpdateForm;
