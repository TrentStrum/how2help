import { primaryKey, factory, manyOf, nullable } from '@mswjs/data';

const modelDictionary = {
	organization: {
		orgId: primaryKey(String),
		name: String,
		causes: manyOf('cause'),
		countryServing: Array,
		stateServing: nullable(String),
		cityServicing: nullable(String),
		userRating: nullable(String),
		orgWebUrl: nullable(String),
		avatarImageUrl: nullable(String),
	},
};

export const db = factory(modelDictionary);
