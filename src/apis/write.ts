import axios from 'axios';
import { URL } from './config'
import { getUserDetails } from './user';
const userDetails = getUserDetails();
export async function createBook(data: any) {
    try {
        const bodyFormData = new FormData();
        bodyFormData.append('title', data.title);
        bodyFormData.append('license', data.license);
        bodyFormData.append('description', data.description);
        bodyFormData.append('tags', data.tags);
        bodyFormData.append('annonymous', data.annonymous);
        if (data.cover) {
            bodyFormData.append('picture', data.cover, data.cover.name);
        }
        const config = {
            headers: {
                Authorization: userDetails.token
            }
        }

        console.log(data);
        console.log(URL + 'create-book');
        const result = await axios.post(URL + 'create-book', bodyFormData, config);
        console.log(result);
        return result.data;
    } catch (error) {
        console.log(error);

        return {
            error: error.message,
        }
    }
}

export async function getBookById(id: string) {
    const res = await axios.get(URL + 'book-by-id/?id='+id);
    return res.data;
}

export async function createPage(data: any) {
    try {
        const config = {
            headers: {
                Authorization: userDetails.token
            }
        }
        console.log(data);
        const result = await axios.post(URL + 'create-page', data, config);
        console.log(result);
        return result.data;
    } catch (error) {
        console.log(error);

        return {
            error: error.message,
        }
    }
}