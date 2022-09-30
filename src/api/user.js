import axios from './index';

export const api_Registration = async (data) => {
    return await axios.post('userAuth/registration', data);
}

export const api_Login = async (data) => {
    return await axios.post('userAuth/login', data);
}

export const getUser = async () => {
    return await axios.get('userAuth/auth', {
        headers: { Authorization: localStorage.getItem("token") },
    })
}

export const api_AddToCart = async (cartId) => {
    return await axios.post('userAuth/addCart', {
        headers: {
          authorization: localStorage.getItem("token"),
        },
        cartId,
    })
}

export const api_RemoveCart = async (cartId) => {
    return await axios.post('userAuth/removeCart', {
        headers: {
          authorization: localStorage.getItem("token"),
        },
        cartId,
    })
}
