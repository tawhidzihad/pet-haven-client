"use client";

import { addPet } from "@/lib/apiService";
import { authClient } from "@/lib/auth-client";
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

const AddPetPage = () => {
	const { data: session } = authClient.useSession();
	const user = session?.user;
	const router = useRouter();

	const onSubmit = async (e) => {
		e.preventDefault();
		const fromData = new FormData(e.currentTarget);
		const petData = {
			...Object.fromEntries(fromData.entries()),
			adopted: false,
			adoptionRequest: 0,
			userId: user?.id,
			userName: user?.name,
		};

		const data = await addPet(petData);

		if (data.insertedId) {
			toast.success("Your pet successfully posted for adoption");
			router.push("/dashboard/my-listings");
		}
	};

	return (
		<div className="space-y-10">
			<div className="text-center space-y-2">
				<h1 className="text-2xl md:text-4xl font-bold text-blue-500">
					Share Your Pet for <span className="text-white">Adoption</span>
				</h1>
				<p className="text-[15px] md:text-lg text-slate-500 dark:text-white/60 md:max-w-lg mx-auto leading-relaxed font-medium">
					Fill in your pet’s details to help them find a loving and caring
					new home.
				</p>
			</div>

			<Card className="rounded-xl">
				<form className="md:p-10 space-y-8" onSubmit={onSubmit}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* Pet Name */}
						<div className="md:col-span-2">
							<TextField name="petName" isRequired>
								<Label>Pet Name</Label>
								<Input
									placeholder="Enter pet name"
									className="rounded-2xl"
								/>
								<FieldError />
							</TextField>
						</div>

						{/* Breed */}
						<TextField name="breed" isRequired>
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
						<TextField name="age" isRequired>
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
						<TextField name="adoptionFee" isRequired>
							<Label>Adoption Fee</Label>
							<Input
								type="number"
								placeholder="e.g. $500"
								className="rounded-2xl"
							/>
							<FieldError />
						</TextField>

						{/* Location */}
						<TextField name="location" isRequired>
							<Label>Location</Label>
							<Input
								placeholder="Enter your location"
								className="rounded-2xl"
							/>
							<FieldError />
						</TextField>

						{/* Image URL */}
						<TextField name="imageUrl" isRequired>
							<Label>Image URL</Label>
							<Input
								type="url"
								placeholder="https://example.com/buno.jpg"
								className="rounded-2xl"
							/>
							<FieldError />
						</TextField>

						{/* Owner Email */}
						<TextField name="ownerEmail" isRequired>
							<Label>Your Email Address</Label>
							<Input
								type="email"
								placeholder={user?.email}
								className="rounded-2xl"
								value={user?.email}
								readOnly
							/>
							<FieldError />
						</TextField>

						{/* Description */}
						<div className="md:col-span-2">
							<TextField name="description" isRequired>
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
						Post for Adoption
					</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddPetPage;
