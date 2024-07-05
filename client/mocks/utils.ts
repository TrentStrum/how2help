// import { UseQueryOptions, useQuery } from '@tanstack/react-query';
// import axios, { AxiosError, AxiosInstance } from 'axios';

// import { User } from '../api/user.types';

// const axiosInstance: AxiosInstance = axios.create({
// 	baseURL: 'http://localhost:3000',
// 	headers: { 'Content-Type': 'application/json' },
// });

// export const userQueryKeys = {
// 	all: () => ['user'],
// 	details: () => [...userQueryKeys.all(), 'details'],
// 	detail: (id: string) => [...userQueryKeys.details(), id],
// };

// export const useGetUser = (id: string, options?: UseQueryOptions<User, AxiosError>) => {
// 	return useQuery<User, AxiosError>(
// 		userQueryKeys.detail(id),
// 		async ({ signal }: AbortController) => {
// 			const { data } = await axiosInstance.get<User>(`/user/${id}`, { signal });
// 			return data;
// 		},
// 		options
// 	);
// };

// const responseBody = <T>(response: AxiosResponse<T>) => response.data;

// const requests = {
// 	get: <T>(url: string) => axios.get<T>(url).then(responseBody),
// };

// const User = {
// 	get: (userId: number) => requests.get<User>(`/user/${userId}`),
// 	getAll: () => requests.get<User[]>('/user'),
// };
