"use client";

import { AlertDialog, Button } from "@heroui/react";
import { MdDelete } from "react-icons/md";

export default function DeleteModal({ pet }) {
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
								This will permanently delete{" "}
								<strong>{pet.petName}</strong> and all associated
								adoption requests.
							</p>
						</AlertDialog.Body>

						<AlertDialog.Footer>
							<Button slot="close" variant="tertiary">
								No, Keep It
							</Button>
							<Button slot="close" variant="danger">
								Yes, Delete
							</Button>
						</AlertDialog.Footer>
					</AlertDialog.Dialog>
				</AlertDialog.Container>
			</AlertDialog.Backdrop>
		</AlertDialog>
	);
}
