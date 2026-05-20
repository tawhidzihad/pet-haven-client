"use client";

import { authClient } from "@/lib/auth-client";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { RiDashboardHorizontalLine } from "react-icons/ri";

export function LoginUserDropDownMenu({ user }) {
	const router = useRouter();
	const { name, image, email } = user;

	const handleLogOut = async () => {
		await authClient.signOut();
		toast.success("Logout success");
		router.push("/");
	};

	const handelDashboard = () => {
		router.push("/dashboard");
	};

	return (
		<Dropdown>
			<Dropdown.Trigger className="rounded-full">
				<Avatar>
					<Avatar.Image
						alt={name}
						src={image}
						className="object-cover"
						referrerPolicy="no-referrer"
					/>

					<Avatar.Fallback
						delayMs={600}
						className="uppercase"
					>{`${name[0]} ${name.slice(-1)}`}</Avatar.Fallback>
				</Avatar>
			</Dropdown.Trigger>

			<Dropdown.Popover className={"rounded-xl"} placement="bottom end">
				<div className="px-3 pt-3 pb-1">
					<div className="flex items-center gap-2">
						<div className="flex flex-col gap-0">
							<p className="text-sm leading-5 font-medium">{name}</p>
							<p className="text-xs leading-none text-muted">{email}</p>
						</div>
					</div>
				</div>

				<Dropdown.Menu>
					<Dropdown.Item id="dashboard" textValue="Dashboard">
						<div
							className="flex w-full items-center justify-between gap-2"
							onClick={handelDashboard}
						>
							<Label>Dashboard</Label>
							<RiDashboardHorizontalLine className="size-3.5" />
						</div>
					</Dropdown.Item>

					<Dropdown.Item id="logout" textValue="Logout" variant="danger">
						<div
							className="flex w-full items-center justify-between gap-2"
							onClick={handleLogOut}
						>
							<Label>Log Out</Label>
							<ArrowRightFromSquare className="size-3.5 text-danger" />
						</div>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown.Popover>
		</Dropdown>
	);
}
