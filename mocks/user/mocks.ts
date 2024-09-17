import { User } from "../../src/types/user.types";


export const mockUsers: User[] = [
	{
		userId: 1,
		firstName: 'Trent',
		lastName: 'Strum',
		username: 'tstrum',
		password: 'asd',
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
				userRating: '5',
				orgWebUrl: 'https://www.unrwa.org/',
				avatarImageUrl: '../../src/assets/images/palestinianFreedom.jpg',
				reviews: [],
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
					},
				],
				countryServing: ['USA'],
				stateServing: '',
				cityServicing: '',
				userRating: '5',
				orgWebUrl: 'https://www.womensmarch.com/',
				avatarImageUrl: '../../src/assets/images/womensMarch.jpg',
				reviews: [],
			},
		],
		favoriteCauses: [
			{
				causeId: 4,
				name: 'Palestinian Freedom',
				description: 'End the apartheid, colonization and genocide in Palestine.',
				avatarImageUrl: '../../src/assets/images/palestinianFreedom.jpg',
			},
			{
				causeId: 1,
				name: 'LGBTQ+',
				description:
					'Supporting the LGTBQ+ community by providing services, advocating for the safety and rights of the members of this community.',
				avatarImageUrl: '../../src/assets/images/lgtbq.jpg',
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
					},
				],
				countryServing: ['USA', 'Canada', 'Germany', 'France', 'UK', 'Mexico', 'Argentina'],
				stateServing: 'Many',
				cityServicing: 'Many',
				userRating: '5',
				orgWebUrl: 'https://standinpride.org/',
				avatarImageUrl: '../../src/assets/images/standInPride.jpg',
				reviews: [],
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
					},
					{
						causeId: 2,
						name: 'Mental Health',
						description:
							'Organizations working to provide mental health assistance as well as aware to various mental health issues.',
						avatarImageUrl: '../../src/assets/images/mentalHealth.jpg',
					},
				],
				countryServing: ['USA'],
				stateServing: '',
				cityServicing: '',
				userRating: '5',
				orgWebUrl: 'https://www.thetrevorproject.org/',
				avatarImageUrl: '../../src/assets/images/The_Trevor_Project_Logo.jpg',
				reviews: [],
			},
		],
		favoriteCauses: [
			{
				causeId: 1,
				name: 'LGBTQ+',
				description:
					'Supporting the LGTBQ+ community by providing services, advocating for the safety and rights of the members of this community.',
				avatarImageUrl: '../../src/assets/images/lgtbq.jpg',
			},
		],
		avatarImageUrl: '../../src/assets/images/charlie.jpg',
	},
];
