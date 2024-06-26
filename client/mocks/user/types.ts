import { primaryKey, nullable, oneOf, manyOf, factory } from "@mswjs/data";

const modelDictionary = {
	user: {
		id: primaryKey(String),
		firstName: String,
		lastName: String,
		username: String,
		password: String,
		email: String,
		phone: nullable(String),
		streetAddress: nullable(String),
		altAddress: nullable(String),
		city: nullable(String),
		State: nullable(String),
		Country: nullable(String),
		role: oneOf('roles'),
		favoriteOrgs: nullable(manyOf('organization')),
		favoriteCauses: nullable(manyOf('cause')),
		profileImageUrl: nullable(String),
	},
};

export const db = factory(modelDictionary);
