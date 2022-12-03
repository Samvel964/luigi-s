import axios from "axios";
import { store } from '../app/store';
import { setError } from "../features/errorSlice";

const instance = axios.create({
    baseURL: 'https://rae-pizza.onrender.com/'
});

instance.interceptors.response.use(
    function (response) {
        return response 
    },
    function(error) {
        if (error.response.status === 400) {
            store.dispatch(setError(error.response.data));
        }
        
        throw error
    }   
);

export default instance
