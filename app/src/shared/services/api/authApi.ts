import { IUser } from './../../../setup/redux/State';
import client from '.'
import { notify } from '../../config/notify';


export const login = async (username: string, password: string) => {
    try {
        const res = await client.post('auth/login', {username, password});
        localStorage.setItem('accessToken', res.data.accessToken)
        notify('success', 'Login', 'Login successfully!')
        return res.data
    } catch (error) {
        notify('error', 'Login', 'Login failed!')
    }
}

export const signup = async (param: IUser) => {
    try {
        const res = await client.post('auth/login', param);
        return res.data
    } catch (error) {
        console.log(error);
        
    }
}