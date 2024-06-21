import { primaryKey, factory, nullable } from '@mswjs/data';

const modelDictionary = {
	cause: {
		id: primaryKey(String),
		name: String,
		description: String,
		causeImageUrl: nullable(String),
	},
};

export const db = factory(modelDictionary);
