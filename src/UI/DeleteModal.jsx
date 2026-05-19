"use client";

import { deletePets } from "@/lib/apiService";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

export default function DeleteModal({ pet }) {
	const { _id, petName } = pet;
	const router = useRouter();

	const handleDeleteBtn = async () => {
		const data = await deletePets(_id);
		if (data.deletedCount) {
			toast.success("Pet deleted successfully!");
			router.refresh();
		}
	};

	return (
		<AlertDialog>
			<Button
				size="sm"
				variant="danger-soft"
				className={"w-full font-normal"}
			>
				<MdDelete />
				Delete
			</Button>

			<AlertDialog.Backdrop>
				<AlertDialog.Container>
					<AlertDialog.Dialog className="sm:max-w-100">
						<AlertDialog.CloseTrigger />

						<AlertDialog.Header>
							<AlertDialog.Icon status="danger" />
							<AlertDialog.Heading>
								Remove Pet From Listings?
							</AlertDialog.Heading>
						</AlertDialog.Header>

						<AlertDialog.Body>
							<p>
								This will permanently delete <strong>{petName}</strong>{" "}
								and all associated adoption requests.
							</p>
						</AlertDialog.Body>

						<AlertDialog.Footer>
							<Button slot="close" variant="tertiary">
								No, Keep It
							</Button>
							<Button
								slot="close"
								variant="danger"
								onClick={handleDeleteBtn}
							>
								Yes, Delete
							</Button>
						</AlertDialog.Footer>
					</AlertDialog.Dialog>
				</AlertDialog.Container>
			</AlertDialog.Backdrop>
		</AlertDialog>
	);
}
