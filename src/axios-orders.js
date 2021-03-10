import axios from "axios";

const instance = axios.create({
    baseURL: 'https://burger-builder-app-d8418-default-rtdb.firebaseio.com/'
});

export default instance;