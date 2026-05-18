"use client";

import NavLink from "@/UI/NavLink";
import ThemeToggle from "@/UI/ThemeToggle";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
			<header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-0">
				<div className="flex justify-between items-center gap-4">
					<button
						className="md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu"
						aria-expanded={isMenuOpen}
					>
						<span className="sr-only">Menu</span>
						<svg
							className="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							{isMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>

					<div className="flex items-center gap-3">
						<Link href={"/"}>
							<Image
								src={"/pethouse.png"}
								alt="Pet Haven Logo"
								width={50}
								height={50}
							/>
						</Link>
						<p className="font-semibold">Pet Haven</p>
					</div>
				</div>
				<div className="block md:hidden">
					<ThemeToggle></ThemeToggle>
				</div>

				<ul className="hidden items-center gap-4 md:flex">
					<li>
						<NavLink href={"/"}>Home</NavLink>
					</li>
					<li>
						<NavLink href={"/all-pets"}>All Pets</NavLink>
					</li>
				</ul>

				<div className="hidden items-center gap-4 md:flex">
					<ThemeToggle></ThemeToggle>
					<div className="flex items-center gap-4">
						<Link href="/login">Login</Link>
						<Link href={"/signup"}>
							<Button>Get Started</Button>
						</Link>
					</div>
				</div>
			</header>

			{isMenuOpen && (
				<div className="border-t md:hidden">
					<ul className="flex flex-col gap-4 p-4">
						<li>
							<NavLink href={"/"}>Home</NavLink>
						</li>
						<li>
							<NavLink href={"/all-pets"}>All Pets</NavLink>
						</li>

						<li>
							<NavLink href={"/login"} className={"inline-block"}>
								Login
							</NavLink>
						</li>
					</ul>
					<div className="mt-4 p-4 flex flex-col gap-2 border-t">
						<Link href="/signup">
							<Button className="w-full">Sign Up</Button>
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
}
