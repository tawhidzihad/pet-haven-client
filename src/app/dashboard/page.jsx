export default function DashboardHomePage() {
	return (
		<div className="text-white">
			<h1 className="text-3xl font-bold">Welcome Back</h1>

			<p className="mt-2 text-default-400">
				Manage your pet listings and adoption requests from your dashboard.
			</p>

			{/* Stats */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
				<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
					<p className="text-default-400 text-sm">Total Listings</p>

					<h2 className="text-3xl font-bold mt-2">12</h2>
				</div>

				<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
					<p className="text-default-400 text-sm">Adoption Requests</p>

					<h2 className="text-3xl font-bold mt-2">5</h2>
				</div>

				<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
					<p className="text-default-400 text-sm">Pets Adopted</p>

					<h2 className="text-3xl font-bold mt-2">3</h2>
				</div>
			</div>
		</div>
	);
}
