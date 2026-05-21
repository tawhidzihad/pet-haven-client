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
export const getAllPets = async (search = "", category = "") => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/pet?search=${search}&category=${category}`,
		{
			cache: "no-store",
		},
	);
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

/* Adoption Related Api Fetch */
// Adoption Request Count +1
export const adoptionRequestCountPlus = async (_id) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/adoption-request-count/${_id}`,
		{
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
		},
	);

	return res.json();
};

// Create Adoption Request
export const createAdoptionRequest = async (adoptionRequestData) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/adoption`, {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(adoptionRequestData),
	});

	return res.json();
};

export const updatepetStatus = async (requestId, updatedStatus) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/update-status/${requestId}`,
		{
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(updatedStatus),
		},
	);
	return res.json();
};

// Get Paricular User Pet Adoption Request
export const getMyPetAllRequests = async (petId) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/my-pet-adoption-requests/${petId}`,
		{ cache: "no-store" },
	);
	return res.json();
};

// Get Particular User Adoption Requests
export const getMyRequests = async (userId) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/adoption/${userId}`,
		{
			cache: "no-store",
		},
	);

	return res.json();
};

// Delete Particular User Adoption Request
export const cencelAdoptionRequest = async (id) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/delete-adoption/${id}`,
		{
			method: "DELETE",
			headers: {
				"content-type": "application/json",
			},
		},
	);

	return res.json();
};
