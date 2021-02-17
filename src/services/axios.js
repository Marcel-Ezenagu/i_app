import axios from 'axios';

const instance = axios.create({
    // baseURL : "http://localhost:4000",
    baseURL: "https://i-a-mern.herokuapp.com",
});

export default instance;









