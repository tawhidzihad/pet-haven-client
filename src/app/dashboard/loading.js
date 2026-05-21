import { Spinner } from "@heroui/react";

const LoadingPage = () => {
	return (
		<div className="h-full flex justify-center items-center">
			<div className="flex flex-col items-center gap-2">
				<Spinner size="xl" />
				<span className="text-xs text-muted">Loaidng...</span>
			</div>
		</div>
	);
};

export default LoadingPage;
