import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fdsc-burger-builder.firebaseio.com/'
});

export default instance;