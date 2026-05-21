"use client";

import { cencelAdoptionRequest } from "@/lib/apiService";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RequestCancelButton = ({ requestId, petId }) => {
	const router = useRouter();

	const handleRequestCancel = async () => {
		const data = await cencelAdoptionRequest(requestId);

		if (data.deletedCount) {
			toast.success("Request cancelled successfully");
			router.refresh();
		}
	};

	return (
		<>
			<Button size="sm" variant="danger-soft" onClick={handleRequestCancel}>
				Cancel
			</Button>
		</>
	);
};

export default RequestCancelButton;
