import axios from 'axios'

const api = axios.create({
    baseURL: 'https://cheshirecleaningsuppliesserver.onrender.com/api'
})

export const getProducts = () => {
    return api.get(`/products`)
    .then(res => res.data.products)
}

export const getProductsByTag = (tagName) => {
    return api.get(`/products/${tagName}`)
    .then(res => res.data.products)
}

export const getTags = async () => {
    return api.get(`/tags`)
    .then(res => res.data.tags)
}

export const postLogin = async (loginData) => {
    return api.post(`/user/login`, loginData)
    .then(res => res.data.user)
}

export const postCreateUser = async (createUserData) => {
    return api.post(`/user`, createUserData)
    .then(res => res.data.user)
}