import { Button, Chip, Table } from "@heroui/react";
import { Eye } from "lucide-react";

export default function MyRequestPage() {
	return (
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

					{/* Table Body */}
					<Table.Body>
						{/* Table Content */}
						<Table.Row>
							<Table.Cell>Billa</Table.Cell>
							<Table.Cell>May, 2, 2026</Table.Cell>
							<Table.Cell>May, 5, 2026</Table.Cell>
							<Table.Cell>
								<Chip size="sm" color="warning" variant="flat">
									Pending
								</Chip>
							</Table.Cell>

							<Table.Cell className={"flex items-center gap-2"}>
								<div className="flex justify-end gap-2">
									<Button size="sm" variant="outline">
										<Eye size={16} />
										View
									</Button>

									<Button size="sm" variant="danger-soft">
										Cancel
									</Button>
								</div>
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Content>
			</Table.ScrollContainer>
		</Table>
	);
}
