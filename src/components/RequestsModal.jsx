"use client";

import {
	editPetData,
	getMyPetAllRequests,
	updatepetStatus,
} from "@/lib/apiService";
import { Button, Modal } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { IoPeople, IoPeopleSharp } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";

export function RequestsModal({ pet }) {
	const [requestsData, setRequestsData] = useState([]);
	const { _id, petName } = pet;

	const handelRequestsBtn = async () => {
		const requestsData = await getMyPetAllRequests(_id);
		setRequestsData(requestsData);
	};

	const handleApproveBtn = async (_id, petId) => {
		const adoptedStatus = {
			adoptedStatus: "approved",
		};
		const isAdopted = {
			adopted: true,
		};
		const data = await updatepetStatus(_id, adoptedStatus);

		if (data.modifiedCount) {
			toast.success("Adopdet");
			await editPetData(petId, isAdopted);
			setRequestsData((prev) =>
				prev.map((item) =>
					item._id === _id ? { ...item, adoptedStatus: "approved" } : item,
				),
			);
		}
	};

	const handleRejectBtn = async (_id, petId) => {
		const adoptedStatus = {
			adoptedStatus: "rejected",
		};
		const isAdopted = {
			adopted: false,
		};
		const data = await updatepetStatus(_id, adoptedStatus);

		if (data.modifiedCount) {
			toast.success("Adopdet");
			await editPetData(petId, isAdopted);
			setRequestsData((prev) =>
				prev.map((item) =>
					item._id === _id ? { ...item, adoptedStatus: "rejected" } : item,
				),
			);
		}
	};

	return (
		<Modal>
			<Button
				size="sm"
				variant="secondary"
				className={"w-full font-normal"}
				onClick={handelRequestsBtn}
			>
				<IoPeople />
				Requests
			</Button>

			<Modal.Backdrop>
				<Modal.Container placement="auto">
					<Modal.Dialog className="bg-blue-950 border border-slate-600 sm:max-w-lg">
						<div className="max-h-[80vh] overflow-y-auto scrollbar-thin">
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
							{requestsData === null ? (
								// For No Request Available
								<div className="text-center p-5">
									<h2 className="text-xl md:text-2xl font-semibold text-white">
										No Adoption Requests Yet
									</h2>
								</div>
							) : (
								<>
									{requestsData?.map((request, ind) => (
										<div
											className="space-y-5 bg-blue-900 rounded-xl p-3 mt-5"
											key={ind}
										>
											{/* Requested user name, email, status */}
											<div className="flex items-center justify-between">
												<div>
													<h4 className="text-white/70 font-semibold text-lg">
														{request?.userName}
													</h4>

													<p className="text-white/60">
														{request.userEmail}
													</p>
												</div>

												{/* Status */}
												<div>
													{request?.adoptedStatus ===
													"approved" ? (
														<div className="px-3 py-1 rounded-full bg-green-100 text-green-700">
															<span className="flex items-center gap-2">
																<FaCheck />
																Approved
															</span>
														</div>
													) : request?.adoptedStatus ===
													  "rejected" ? (
														<div className="px-3 py-1 rounded-full bg-red-100 text-red-700">
															<span className="flex items-center gap-2">
																<FaX />
																Rejected
															</span>
														</div>
													) : (
														<div className="px-3 py-1 rounded-full bg-orange-100 text-orange-700">
															<span className="flex items-center gap-2">
																<MdOutlineWatchLater />
																Pending
															</span>
														</div>
													)}
												</div>
											</div>

											{/* Dates */}
											<div className="flex flex-col md:flex-row justify-between">
												{/* Pickup Date */}
												<p className="text-white/60">
													Pickup Date:{" "}
													{new Date(
														request.pickupDate,
													).toLocaleDateString("en-US", {
														month: "short",
														day: "numeric",
														year: "numeric",
													})}
												</p>

												{/* Requested Date */}
												<p className="text-white/60">
													Requested Date:{" "}
													{new Date(
														request.requestedDate,
													).toLocaleDateString("en-US", {
														month: "short",
														day: "numeric",
														year: "numeric",
													})}
												</p>
											</div>

											{/* Requested User Message */}
											<div className="px-4 py-2 bg-blue-950 rounded-full">
												<p className="text-white">
													{request.userMessage}
												</p>
											</div>

											{/* Approve & Reject Btn */}
											{request?.adoptedStatus !== "pending" ? (
												""
											) : (
												<div className="grid grid-cols-2 gap-3">
													<Button
														className="w-full bg-green-500 text-white"
														onClick={() =>
															handleApproveBtn(
																request?._id,
																request?.petId,
																request?.adoptedStatus,
															)
														}
													>
														<FaCheck />
														Approve
													</Button>

													<Button
														className="w-full bg-red-500 text-white"
														onClick={() =>
															handleRejectBtn(
																request?._id,
																request?.petId,
																request?.adoptedStatus,
															)
														}
													>
														<FaX />
														Reject
													</Button>
												</div>
											)}
										</div>
									))}
								</>
							)}
						</div>
					</Modal.Dialog>
				</Modal.Container>
			</Modal.Backdrop>
		</Modal>
	);
}
