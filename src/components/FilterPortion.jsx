"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function FilterDropdown() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();
	const [selected, setSelected] = useState("Filter");
	const [open, setOpen] = useState(false);

	const handleChange = (category) => {
		setSelected(category);
		setOpen(false);

		const params = new URLSearchParams(searchParams);

		if (category) {
			params.set("category", category);
		} else {
			params.delete("category");
		}

		router.push(`${pathname}?${params.toString()}`);
	};

	const categories = ["Dog", "Cat", "Bird", "Hamster", "Rabbit", "Cultural"];

	return (
		<div className="relative inline-block">
			{/* Button */}
			<button
				onClick={() => setOpen(!open)}
				className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm"
			>
				{selected}

				<svg
					xmlns="http://www.w3.org/2000/svg"
					className={`h-4 w-4 transition-transform ${
						open ? "rotate-180" : ""
					}`}
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>

			{/* Dropdown */}
			{open && (
				<div className="absolute left-0 top-full z-50 mt-2 w-52 rounded-2xl border border-gray-200 bg-white p-2 shadow-lg">
					<ul className="space-y-1">
						{categories.map((category) => (
							<li key={category}>
								<button
									onClick={() => handleChange(category)}
									className="w-full rounded-xl px-3 py-2 text-left hover:bg-gray-100"
								>
									{category}
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
