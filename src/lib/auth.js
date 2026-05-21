import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_DB_URI);
const db = client.db("pet-haven");

export const auth = betterAuth({
	database: mongodbAdapter(db, {
		client,
	}),

	emailAndPassword: {
		enabled: true,
		autoSignIn: false,
	},

	socialProviders: {
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		},
	},

	session: {
		cookieCache: {
			enabled: true,
			strategy: "jwt",
			// max days // Default is 5 minuets
			maxAge: 7 * 24 * 60 * 60,
		},
	},

	plugins: [jwt()],
});
