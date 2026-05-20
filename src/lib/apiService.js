// Add Pet Operation
export const addPet = async (data) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet`, {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(data),
	});
	return res.json();
};

// Get My Listing Pets Operation
export const getMyPets = async (userId) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/mypets/${userId}`,
	);
	return res.json();
};

// Update One Pet Operation
export const editPetData = async (id, updatedData) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet/${id}`, {
		method: "PATCH",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(updatedData),
	});

	return res.json();
};

// Get All Pet Operation
export const getAllPets = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet`, {
		cache: "no-store",
	});
	return res.json();
};

// Get One Pet Operation
export const getThisPet = async (id) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet/${id}`, {
		cache: "no-store",
	});
	return res.json();
};

// Delete One Pet Operation
export const deletePets = async (id) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet/${id}`, {
		method: "DELETE",
		headers: {
			"content-type": "application/json",
		},
	});

	return res.json();
};
