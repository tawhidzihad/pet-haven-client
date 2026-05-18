"use client";

import { authClient } from "@/lib/auth-client";
import {
	Button,
	Card,
	Description,
	FieldError,
	Form,
	Input,
	Label,
	TextField,
} from "@heroui/react";
import { Icon } from "@iconify/react";

import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const SignUpPage = () => {
	const [password, setPassword] = useState("");
	const [confirmPass, setConfirmPass] = useState("");

	const onSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const userData = Object.fromEntries(formData.entries());

		const { data, error } = await authClient.signUp.email({
			email: userData.email,
			password: userData.password,
			name: userData.name,
			image: userData.photo,
		});

		if (error) {
			toast.error(error.message);
			return;
		}

		if (data) {
			toast.success("Welcome to PetHaven!");
			redirect("/login");
		}
	};

	return (
		<div className="bg-[#002449] dark:bg-black py-20 px-5 lg:px-0">
			<div className="max-w-7xl mx-auto space-y-8">
				<div className="text-center space-y-4">
					<h2 className="text-2xl md:text-4xl text-blue-500 font-bold">
						Join Our Pet Community
					</h2>
					<p className="text-xs md:text-lg text-white max-w-60 md:max-w-xs mx-auto leading-relaxed font-medium">
						Register now to start adopting pets and managing your listings
						easily.
					</p>
				</div>

				<div className="flex justify-center items-center">
					<Card className="rounded-xl p-4 md:p-9 w-125 space-y-4">
						<Button className="w-full" variant="tertiary" size="lg">
							<Icon icon="devicon:google" />
							Sign in with Google
						</Button>

						<div className="flex items-center gap-1">
							<span className="w-full border"></span>
							<span className="text-muted">OR</span>
							<span className="w-full border"></span>
						</div>

						<Form
							className="flex flex-col justify-between gap-4"
							render={(props) => <form {...props} data-custom="foo" />}
							onSubmit={onSubmit}
						>
							{/* Name Field */}
							<TextField
								isRequired
								name="name"
								type="text"
								validate={(value) => {
									if (!value) {
										return "Please enter your name";
									}
									return null;
								}}
							>
								<Label>Name</Label>
								<Input placeholder="John Doe" />
								<FieldError />
							</TextField>

							{/* Photo URL Field */}
							<TextField name="photo" type="url">
								<Label>Photo Url</Label>
								<Input placeholder="https://your-image.com" />
							</TextField>

							{/* Email Field */}
							<TextField
								isRequired
								name="email"
								type="email"
								validate={(value) => {
									if (
										!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
											value,
										)
									) {
										return "Please enter your email";
									}
									return null;
								}}
							>
								<Label>Email</Label>
								<Input placeholder="john@example.com" />
								<FieldError />
							</TextField>

							{/* Password Field */}
							<TextField
								isRequired
								minLength={8}
								name="password"
								type="password"
								validate={(value) => {
									if (value.length < 8) {
										return "Password must be at least 8 characters";
									}
									if (!/[A-Z]/.test(value)) {
										return "Password must contain at least one uppercase letter";
									}
									if (!/[0-9]/.test(value)) {
										return "Password must contain at least one number";
									}
									return null;
								}}
							>
								<Label>Password</Label>
								<Input
									placeholder="Enter your password"
									onChange={(e) => setPassword(e.target.value)}
								/>
								<FieldError />
							</TextField>

							{/* Confirm Password Field */}
							<TextField
								isRequired
								name="confirmPassword"
								type="password"
								validate={() => {
									if (confirmPass !== password) {
										return "Passwords do not match";
									}

									return null;
								}}
							>
								<Label>Confirm Password</Label>
								<Input
									placeholder="Confirm your password"
									onChange={(e) => setConfirmPass(e.target.value)}
								/>
								<FieldError />
								<Description className="text-xs">
									Password must be 8 characters with 1 uppercase and 1
									digit
								</Description>
							</TextField>

							<div className="flex gap-2 justify-center mt-4">
								<Button className={"bg-blue-500"} type="submit">
									Sign Up
								</Button>
								<Button type="reset" variant="secondary">
									Reset
								</Button>
							</div>
						</Form>

						<p className="text-xs font-medium text-center">
							Already Have An Account ?{" "}
							<Link href={"/login"} className="text-blue-500">
								Login
							</Link>
						</p>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default SignUpPage;
