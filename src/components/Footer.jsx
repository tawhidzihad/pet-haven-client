import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="bg-slate-900 dark:bg-black py-15 px-5 lg:px-0">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col lg:flex-row justify-between gap-8">
					<div>
						<Link href={"/"}>
							<Image
								src={"/pethaven.png"}
								alt="Pet Haven Logo"
								width={100}
								height={100}
							/>
						</Link>

						<p className="max-w-80 text-white">
							Helping pets find loving homes through a secure and modern
							adoption platform.
						</p>
					</div>

					<div>
						<h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 opacity-50">
							Contact
						</h3>
						<div className="flex gap-3 items-center">
							<a href="" className="bg-slate-800 p-2 rounded-full">
								<FaGithub className="h-5 w-auto text-white" />
							</a>
							<a href="" className="bg-slate-800 p-2 rounded-full">
								<FaLinkedin className="h-5 w-auto text-white" />
							</a>
							<a href="" className="bg-slate-800 p-2 rounded-full">
								<FaXTwitter className="h-5 w-auto text-white" />
							</a>
							<a href="" className="bg-slate-800 p-2 rounded-full">
								<FaYoutube className="h-5 w-auto text-white" />
							</a>
						</div>
					</div>
				</div>
				<div className="mt-16 pt-8 border-t border-zinc-700 flex flex-col md:flex-row justify-center items-center gap-4 text-gray-500 text-sm px-0 md:px-4 lg:px-0">
					<p className="text-gray-500">
						© {new Date().getFullYear()} All rights reserved. Pet Haven.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
Footer;
