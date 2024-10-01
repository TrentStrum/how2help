import { GetUserResponse, User } from '..';
import { mockResponseBase } from '../../../mocks/types';

export const mockUsers: User[] = [
	{
		userId: 1,
		firstName: 'Trent',
		lastName: 'Strum',
		username: 'tstrum',
		password: 'Pa$$w0rd',
		email: 'trent@test.com',
		phone: '',
		streetAddress: '123 Some St',
		altAddress: '',
		city: 'Anytown',
		State: 'CA',
		Country: 'USA',
		role: 'Admin',
		favoriteOrgs: [
			{
				orgId: 2,
				name: 'UNRWA',
				causes: [],
				countryServing: ['Palestine'],
				stateServing: '',
				cityServicing: '',
				userRating: 5,
				orgWebUrl: 'https://www.unrwa.org/',
				status: 'active',
				avatarImageUrl: '../../src/assets/images/palestinianFreedom.jpg',
				reviews: [],
				events: [],
			},
			{
				orgId: 6,
				name: 'Womens March',
				causes: [
					{
						causeId: 5,
						name: "Women's Right",
						description:
							'Fighting to protect womens reproductive rights, voting rights and humen rights in general. ',
						avatarImageUrl: '../../src/assets/images/womensRights.jpg',
						userRating: 5,
					},
				],
				countryServing: ['USA'],
				stateServing: '',
				cityServicing: '',
				userRating: 5,
				orgWebUrl: 'https://www.womensmarch.com/',
				status: 'active',
				avatarImageUrl: '../../src/assets/images/womensMarch.jpg',
				reviews: [],
				events: [],
			},
		],
		favoriteCauses: [
			{
				causeId: 4,
				name: 'Palestinian Freedom',
				description: 'End the apartheid, colonization and genocide in Palestine.',
				avatarImageUrl: '../../src/assets/images/palestinianFreedom.jpg',
				userRating: 5,
			},
			{
				causeId: 1,
				name: 'LGBTQ+',
				description:
					'Supporting the LGTBQ+ community by providing services, advocating for the safety and rights of the members of this community.',
				avatarImageUrl: '../../src/assets/images/lgtbq.jpg',
				userRating: 5,
			},
		],
		avatarImageUrl: '../../src/assets/avatars/1.png',
		coverImageUrl: '../../src/assets/images/trent.jpg',
	},
	{
		userId: 2,
		firstName: 'Charlie',
		lastName: 'W',
		email: 'charlie@test.com',
		username: 'cwhipple',
		password: 'P@ssw0rd',
		phone: '',
		streetAddress: '345 Any Pl',
		altAddress: '',
		city: 'Someville',
		State: 'MO',
		Country: 'USA',
		role: 'user',
		favoriteOrgs: [
			{
				orgId: 1,
				name: 'Stand In Pride',
				causes: [
					{
						causeId: 1,
						name: 'LGBTQ+',
						description:
							'Supporting the LGTBQ+ community by providing services, advocating for the safety and rights of the members of this community.',
						avatarImageUrl: '../../src/assets/images/lgtbq.jpg',
						userRating: 3,
					},
				],
				countryServing: ['USA', 'Canada', 'Germany', 'France', 'UK', 'Mexico', 'Argentina'],
				stateServing: 'Many',
				cityServicing: 'Many',
				userRating: 5,
				orgWebUrl: 'https://standinpride.org/',
				status: 'active',
				avatarImageUrl: '../../src/assets/images/standInPride.jpg',
				reviews: [],
				events: [],
			},
			{
				orgId: 4,
				name: 'The Trevor Project',
				causes: [
					{
						causeId: 1,
						name: 'LGBTQ+',
						description:
							'Supporting the LGTBQ+ community by providing services, advocating for the safety and rights of the members of this community.',
						avatarImageUrl: '../../src/assets/images/lgtbq.jpg',
						userRating: 3,
					},
					{
						causeId: 2,
						name: 'Mental Health',
						description:
							'Organizations working to provide mental health assistance as well as aware to various mental health issues.',
						avatarImageUrl: '../../src/assets/images/mentalHealth.jpg',
						userRating: 4,
					},
				],
				countryServing: ['USA'],
				stateServing: '',
				cityServicing: '',
				userRating: 5,
				orgWebUrl: 'https://www.thetrevorproject.org/',
				status: 'active',
				avatarImageUrl: '../../src/assets/images/The_Trevor_Project_Logo.jpg',
				reviews: [],
				events: [],
			},
		],
		favoriteCauses: [
			{
				causeId: 1,
				name: 'LGBTQ+',
				description:
					'Supporting the LGTBQ+ community by providing services, advocating for the safety and rights of the members of this community.',
				avatarImageUrl: '../../src/assets/images/lgtbq.jpg',
				userRating: 5,
			},
		],
		avatarImageUrl: '../../src/assets/images/charlie.jpg',
	},
];

export const mockGetUserResponse: (user: User) => GetUserResponse = (user: User) => ({
	...mockResponseBase,
	results: user,
});
