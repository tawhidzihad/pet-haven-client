"use client";

import { Button, Modal } from "@heroui/react";
import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { IoPeople, IoPeopleSharp } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";

export function RequestsModal({ pet }) {
	const {
		_id,
		vaccinationStatus,
		userId,
		species,
		petName,
		ownerEmail,
		location,
		imageUrl,
		healthStatus,
		gender,
		description,
		breed,
		age,
		adoptionFee,
		adoptionRequest,
	} = pet;

	return (
		<Modal>
			<Button size="sm" variant="secondary" className={"w-full font-normal"}>
				<IoPeople />
				Requests
			</Button>

			<Modal.Backdrop>
				<Modal.Container placement="auto">
					<Modal.Dialog className="bg-blue-950 p-3 border border-slate-600 sm:max-w-lg">
						<Modal.CloseTrigger />

						{/* Modal header */}
						<Modal.Header className="flex flex-row items-center">
							<Modal.Icon className="bg-zinc-600 text-foreground">
								<IoPeopleSharp className="text-white size-6" />
							</Modal.Icon>

							<Modal.Heading className="text-white">
								Adoption Requests for {petName}
							</Modal.Heading>
						</Modal.Header>

						{/* Modal Body */}

						<div className="space-y-5 bg-blue-900 rounded-xl p-3 mt-5">
							{/* Requested user name, email, status */}
							<div className="flex items-center justify-between">
								<div>
									<h4 className="text-white/70 font-semibold text-lg">
										User Name
									</h4>
									<p className="text-white/60">UserEmail@gmail.com</p>
								</div>

								<div>
									<div className="px-3 py-1 rounded-full bg-orange-100 text-orange-700">
										<span className="flex items-center gap-2">
											{" "}
											<MdOutlineWatchLater /> Pending
										</span>
									</div>
								</div>
							</div>

							{/* Pickup Date */}
							<p className="text-white/60">Pickup Date: May, 12, 2026</p>

							{/* Requested User Message */}
							<div className="px-4 py-2 bg-blue-950 rounded-full">
								<p className="text-white">I love {petName} pet</p>
							</div>

							{/* Approve & Reject Btn */}
							<div className="grid grid-cols-2 gap-3">
								<Button className="w-full bg-green-500 text-white">
									<FaCheck />
									Approve
								</Button>
								<Button className="w-full bg-red-500 text-white">
									<FaX />
									Reject
								</Button>
							</div>
						</div>
					</Modal.Dialog>
				</Modal.Container>
			</Modal.Backdrop>
		</Modal>
	);
}
