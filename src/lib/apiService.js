// Create Operation
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

// Get All Operation
export const getPets = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet`, {
		cache: "no-store",
	});
	return res.json();
};

// Get One Operation
export const getThisPet = async (id) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet/${id}`, {
		cache: "no-store",
	});
	return res.json();
};

// Delete Operation
export const deletePets = async (id) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet/${id}`, {
		method: "DELETE",
		headers: {
			"content-type": "application/json",
		},
	});

	return res.json();
};
