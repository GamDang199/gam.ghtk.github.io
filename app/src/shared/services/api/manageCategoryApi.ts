import { notify } from './../../config/notify';
import axios from "axios";
import client from ".";
import { ICategory } from "../../../setup/redux/State";

const getToken = () => {
    return localStorage.getItem("accessToken");
};

export const getListCategoryApi = async() => {
    
    try {
        const res = await client.get('category?page=0&page_size=10')
        return res.data
    } catch (error) {
        console.log(error);
        
    }
}

export const postCategoryApi = async(param: ICategory) => {
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

export const updateCategoryApi = async(param: any) => {
    try {
        const res = await client.put(`category/${param.id}`, param,{
            headers: {
                "Content-Type": "application/json"
            }
        })
        notify('success', 'res', 'Update successfully!')
        return res.data
    } catch (error) {
        console.log(error);
        notify('error', 'Category', 'Update Failed!')
        
    }
}

export const uploadImageCategoryApi = async(id: number, param: object) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `${getToken()}`
            }
        }
        const res = await client.post(`/update-image/${id}`, param, config)
        return res.data
    } catch (error) {
        console.log(error);
        
    }
}