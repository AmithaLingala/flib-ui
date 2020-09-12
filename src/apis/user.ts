import axios from 'axios';

const URL = 'http://192.168.0.104:3422/';

export async function register(data: any) {
    try {
        const result = await axios.post(URL + 'signup', data);
        console.log(result);
        return result.data;
    } catch(error) {
        return {
            error: error.message,
        }
    }
}

export async function login(data: any) {
    try {
        const result = await axios.post(URL + 'login', data);
        console.log(result);
        return result.data;
    } catch(error) {
        return {
            error: error.message,
        }
    }
}