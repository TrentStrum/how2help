import { usePostUserAuth } from '../../api/hooks/user/usePostUserAuth';


const loginAPI = async (username: string, password: string) => {
	try {
		const data = usePostUserAuth();
		return data;
	} catch (error) {
		console.log(error)
	}
    
};



export { loginAPI };

// export const registerAPI = async (email: string, username: string, password: string) => {
// 	try {
// 		const data = await axios.post<UserProfileToken>(api + 'account/register', {
// 			email: email,
// 			username: username,
// 			password: password,
// 		});
// 		return data;
// 	} catch (error) {
// 		handleError(error);
// 	}
// };
