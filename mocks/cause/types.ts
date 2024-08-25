import { primaryKey, factory } from '@mswjs/data';

const modelDictionary = {
	cause: {
		causeId: primaryKey(String),
		name: String,
		description: String,
		avatarImageUrl: String,
	},
};

export const db = factory(modelDictionary);
