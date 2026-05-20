import { redirect } from "next/navigation";

export default function DashboardHomePage() {
	return redirect("/dashboard/my-request");
}
