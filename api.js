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

export const postCreateOrder = async (orderDetails) => {
    return api.post(`/order`, orderDetails)
    .then(res => res.data.order)
}

export const getOrders = async () => {
    return api.get("/order")
    .then(res => res.data.orders)
}

export const updateOrder = async (orderId, orderStatus) => {
    return api.patch(`/order/update/${orderId}?orderStatus=${orderStatus}`)
    .then(res => res.data.updatedOrder)
}

export const updatePaymentStatusOrder = async (orderId) => {
    return api.patch(`/order/update/${orderId}/payment`)
    .then(res => res.data.updatedOrder)
}