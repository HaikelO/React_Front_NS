import axios from 'axios';

export const FETCH_PRODUCTS = 'fetch_PRODUCTS';

const ROOT_URL = "http://localhost:9090/api";

export function fetchProducts() {
    const request = axios.get(`${ROOT_URL}/products`);
    return {
        type: FETCH_PRODUCTS,
        payload: request
    }
}