"use server";

import { headers } from "next/headers";
import { auth } from "./auth";

// Add Pet Operation
export const addPet = async (data) => {
	const { token } = await auth.api.getToken({
		headers: await headers(),
	});

	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet`, {
		method: "POST",
		headers: {
			"content-type": "application/json",
			authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(data),
	});
	return res.json();
};

// Get My Listing Pets Operation
export const getMyPets = async (userId) => {
	const { token } = await auth.api.getToken({
		headers: await headers(),
	});
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/mypets/${userId}`,
		{ cache: "no-store", headers: { authorization: `Bearer ${token}` } },
	);
	return res.json();
};

// Update One Pet Operation
export const editPetData = async (id, updatedData) => {
	const { token } = await auth.api.getToken({
		headers: await headers(),
	});
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet/${id}`, {
		method: "PATCH",
		headers: {
			"content-type": "application/json",
			authorization: `Bearer ${token}`,
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
	const { token } = await auth.api.getToken({
		headers: await headers(),
	});
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet/${id}`, {
		cache: "no-store",
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
	return res.json();
};

// Delete One Pet Operation
export const deletePets = async (id) => {
	const { token } = await auth.api.getToken({
		headers: await headers(),
	});
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet/${id}`, {
		method: "DELETE",
		headers: {
			"content-type": "application/json",
			authorization: `Bearer ${token}`,
		},
	});

	return res.json();
};

/* Adoption Related Api Fetch */
// Adoption Request Count +1
export const adoptionRequestCountPlus = async (_id) => {
	const { token } = await auth.api.getToken({
		headers: await headers(),
	});
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/adoption-request-count/${_id}`,
		{
			method: "PATCH",
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${token}`,
			},
		},
	);

	return res.json();
};

// Create Adoption Request
export const createAdoptionRequest = async (adoptionRequestData) => {
	const { token } = await auth.api.getToken({
		headers: await headers(),
	});
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/adoption`, {
		method: "POST",
		headers: {
			"content-type": "application/json",
			authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(adoptionRequestData),
	});

	return res.json();
};

// Update Pet Adoption Status
export const updatepetStatus = async (requestId, updatedStatus) => {
	const { token } = await auth.api.getToken({
		headers: await headers(),
	});
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/update-status/${requestId}`,
		{
			method: "PATCH",
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(updatedStatus),
		},
	);
	return res.json();
};

// Get Particular User Pets Data by petId
export const getMyPetAllRequests = async (petId) => {
	const { token } = await auth.api.getToken({
		headers: await headers(),
	});
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/my-pet-adoption-requests/${petId}`,
		{ cache: "no-store", headers: { authorization: `Bearer ${token}` } },
	);
	return res.json();
};

// Get Particular User Adoption Requests
export const getMyRequests = async (userId) => {
	const { token } = await auth.api.getToken({
		headers: await headers(),
	});
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/adoption/${userId}`,
		{
			cache: "no-store",
			headers: {
				authorization: `Bearer ${token}`,
			},
		},
	);

	return res.json();
};

// Delete Particular User Adoption Request
export const cencelAdoptionRequest = async (id) => {
	const { token } = await auth.api.getToken({
		headers: await headers(),
	});
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/delete-adoption/${id}`,
		{
			method: "DELETE",
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${token}`,
			},
		},
	);

	return res.json();
};
