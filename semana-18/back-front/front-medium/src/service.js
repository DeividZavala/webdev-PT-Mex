import axios from 'axios';

const base_url = "http://localhost:3000/api";

export const login = (auth, history) => {
    axios.post(`${base_url}/auth/login`, auth)
        .then(res => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            history.push("/")
        })
        .catch(err => {
            console.error(err);
        })
};

export const getPosts = (token) => {
    return axios.get(`${base_url}/posts/`,{
        headers: {
            "x-access-token": token
        }
    })
};