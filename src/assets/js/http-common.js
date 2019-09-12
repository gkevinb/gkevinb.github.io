import axios from 'axios';

export const HTTP = axios.create({
    baseURL: 'https://api.github.com/',
})

export const DB = axios.create({
    baseURL: 'https://gkevinb.github.io/',
})