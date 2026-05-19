"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{
		name: "Add Pet",
		href: "/dashboard/add-pet",
	},
	{
		name: "My Listings",
		href: "/dashboard/my-listings",
	},
	{
		name: "My Request",
		href: "/dashboard/my-request",
	},
];

const DashboardNavigation = () => {
	const pathname = usePathname();

	return (
		<div className="rounded-2xl text-white">
			<h2 className="text-2xl font-medium text-blue-500 mb-5">Dashboard</h2>

			<div className="flex flex-col gap-3">
				{links.map((link, ind) => (
					<Link
						key={ind}
						href={link.href}
						className={`rounded-xl px-4 py-3 transition-all duration-300 ease-in-out
						${
							pathname === link.href
								? "bg-blue-500 text-white"
								: ""
						}`}
					>
						{link.name}
					</Link>
				))}
			</div>
		</div>
	);
};

export default DashboardNavigation;
