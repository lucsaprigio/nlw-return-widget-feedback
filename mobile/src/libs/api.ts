import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://192.16.16.114:3333'
});