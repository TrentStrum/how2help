import axios, { AxiosResponse } from 'axios';
import { User as IUser } from '../../Models/IUser';
import { Organization } from '../../Models/IOrganization';


axios.defaults.baseURL= 'http://localhost:3000'

const responseBody = <T>(response: AxiosResponse<T>) => response.data

const requests = {
	get: <T>(url: string) => axios.get<T>(url).then(responseBody),
};

const User = {
	get: (userId: number) => requests.get<IUser>(`/user/${userId}`),
	getAll: () => requests.get<IUser[]>('/user'),
};

const Org = {
	get: (orgId: number) => requests.get<Organization>(`/org/${orgId}`),
	getAll: () => requests.get<Organization[]>('/org'),
}

const agent = {

	User,
	Org,  

};

export default agent;
