import DashboardNavigation from "@/UI/DashboardNavigation";

export default function DashboardLayout({ children }) {
	return (
		<div className="bg-[#002449] dark:bg-black py-20 px-5">
			<div className="max-w-7xl mx-auto grid grid-cols-12 gap-5">
				{/* Navigation Links */}
				<div className="col-span-12 lg:col-span-3 border border-slate-600/50 rounded-2xl p-4">
					<DashboardNavigation />
				</div>

				{/* Main Content */}
				<div className="col-span-12 lg:col-span-9 border border-slate-600/50 rounded-2xl p-4">
					{children}
				</div>
			</div>
		</div>
	);
}
