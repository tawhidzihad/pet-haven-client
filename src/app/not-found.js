import { Button } from "@heroui/react";
import Link from "next/link";

const NotFoundPage = () => {
	return (
		<div className="flex items-center justify-center bg-blue-950 py-20 lg:py-50">
			<div className="text-center max-w-xl">
				<h1 className="text-7xl md:text-8xl font-bold text-blue-500">
					404
				</h1>

				<h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">
					Page Not Found
				</h2>

				<p className="mt-4 text-muted leading-7">
					Sorry, the page you are looking for doesn’t exist or may have
					been moved.
				</p>

				<div className="mt-8 flex items-center justify-center">
					<Link href={"/"}>
						<Button className="bg-blue-500 text-white rounded-full px-8">
							Back to Home
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFoundPage;
