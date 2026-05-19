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

export const getPets = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet`);
	return res.json();
};
