import axios from 'axios';
import { ROOT_URL } from './../../_params/index';

export const FETCH_PRODUCTS = 'fetch_products';
export const ADD_PRODUCT = 'add_product';
export const FETCH_PRODUCT = 'fetch_product';
export const DELETE_PRODUCT = 'delete_product';

export function fetchProducts() {
    const request = axios.get(`${ROOT_URL}/products`);
    return {
        type: FETCH_PRODUCTS,
        payload: request
    }
}

export function addProduct(item, callback) {
    const request = axios.post(`${ROOT_URL}/product/add`, item).then((res) => { return callback(res) });
    return {
        type: ADD_PRODUCT,
        payload: request
    }
}

export function fetchProduct(id) {
    const request = axios.get(`${ROOT_URL}/product/detail/${id}`);
    return {
        type: FETCH_PRODUCT,
        payload: request
    }
}

export function deleteProduct(id) {
    const request = axios.delete(`${ROOT_URL}/product/delete/${id}`);
    return {
        type: DELETE_PRODUCT,
        payload: request
    }
}