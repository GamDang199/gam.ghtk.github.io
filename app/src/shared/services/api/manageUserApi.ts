import { IUser } from '../../../setup/redux/State';
import { notify } from '../../config/notify';
import client from ".";

export const getListUserApi = async() => {
    
    try {
        const res = await client.get('user/get-all?page=0&page_size=10')
        return res.data
    } catch (error) {
        console.log(error);    
    }
}

export const getUserByIdApi = async(id: any) => {
    try {
        const res = await client.get(`user/get-user/${id}`)
        return res.data
    } catch (error) {
        console.log(error);    
    }
}

export const postCategoryApi = async(param: IUser) => {
    try {
        const res = await client.post('category', param)
        notify('success', 'Category', 'Create category successfully!')
        return res.data
    } catch (error) {
        console.log(error);
        notify('error', 'Category', 'Create category failed!')
    }
}

export const deleteCategoryApi = async(id: number) => {
    
    try {
        const res = await client.delete(`category/${id}`)
        notify('success', 'res', 'Delete successfully!')
        return res.data
    } catch (error) {
        notify('error', 'Category', 'Delete Failed!')
    }
}