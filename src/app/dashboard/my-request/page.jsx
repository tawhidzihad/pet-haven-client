import { getMyRequests } from "@/lib/apiService";
import { auth } from "@/lib/auth";
import RequestCancelButton from "@/UI/RequestCancelButton";
import { Button, Chip, Table } from "@heroui/react";
import { Eye } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";

export default async function MyRequestPage() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});
	const user = session?.user;
	const allRequests = await getMyRequests(user?.id);

	return (
		<>
			<Table className="rounded-lg">
				<Table.ScrollContainer>
					<Table.Content aria-label="My Request" className="min-w-150">
						{/* Table Header */}
						<Table.Header>
							<Table.Column isRowHeader>Pet Name</Table.Column>
							<Table.Column>Request Date</Table.Column>
							<Table.Column>Pickup Date</Table.Column>
							<Table.Column>Status</Table.Column>
							<Table.Column>Actions</Table.Column>
						</Table.Header>

						<Table.Body>
							{allRequests.map((request) => (
								<Table.Row key={request._id}>
									{/* Pet Name */}
									<Table.Cell>{request.petName}</Table.Cell>

									{/* Requested Date*/}
									<Table.Cell>
										{new Date(
											request.requestedDate,
										).toLocaleDateString("en-US", {
											month: "short",
											day: "numeric",
											year: "numeric",
										})}
									</Table.Cell>

									{/* Pickup Date */}
									<Table.Cell>
										{new Date(request.pickupDate).toLocaleDateString(
											"en-US",
											{
												month: "short",
												day: "numeric",
												year: "numeric",
											},
										)}
									</Table.Cell>

									{/* Adoption Status */}
									<Table.Cell>
										{request.adopted === "true" ? (
											<Chip
												size="sm"
												className="bg-green-100 text-green-600"
												variant="soft"
											>
												Approved
											</Chip>
										) : request.adopted === "false" ? (
											<Chip size="sm" color="danger" variant="soft">
												Pending
											</Chip>
										) : (
											<Chip size="sm" color="warning" variant="flat">
												Pending
											</Chip>
										)}
									</Table.Cell>

									<Table.Cell className={"flex items-center gap-2"}>
										<div className="flex justify-end gap-2">
											{/* Request Delete Button */}
											<RequestCancelButton
												requestId={request._id}
												petId={request.petId}
											></RequestCancelButton>

											{/* View Button */}
											<Link href={`/all-pets/${request.petId}`}>
												<Button size="sm" variant="outline">
													<Eye size={16} />
													View
												</Button>
											</Link>
										</div>
									</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
					</Table.Content>
				</Table.ScrollContainer>
			</Table>
		</>
	);
}
