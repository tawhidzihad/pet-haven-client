"use client";

import { Button, SearchField } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchModal() {
	const [searchInput, setSearchInput] = useState("");
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	const handleSearch = () => {
		const params = new URLSearchParams(searchParams);

		if (searchInput) {
			params.set("search", searchInput);
		} else {
			params.delete("search");
		}

		router.push(`${pathname}?${params.toString()}`);
	};

	return (
		<div className="flex items-center gap-2">
			<SearchField name="search" aria-label="search" className="flex-1">
				<SearchField.Group>
					<SearchField.SearchIcon />

					<SearchField.Input
						placeholder="Search..."
						onChange={(e) => setSearchInput(e.target.value)}
					/>

					<SearchField.ClearButton />
				</SearchField.Group>
			</SearchField>

			<Button className={"rounded-xl"} onClick={handleSearch}>
				Search
			</Button>
		</div>
	);
}
