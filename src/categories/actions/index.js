import axios from 'axios';
import { ROOT_URL } from './../../_params/index';

export const FETCH_CATEGORIES = "fetch_categories";
export const ADD_CATEGORIE = "add_categorie";
export const FETCH_CATEGORIE = "fetch_categorie";

export function fetchCategories() {
    const request = axios.get(`${ROOT_URL}/categories`);
    return {
        type: FETCH_CATEGORIES,
        payload: request
    }
}

export function addCategorie(item, callback) {
    const request = axios.post(`${ROOT_URL}/categorie/add`, item, ).then((result) => { return callback(result) });
    return {
        type: ADD_CATEGORIE,
        payload: request
    }
}

export function fetchCategorie(id) {
    const request = axios.get(`${ROOT_URL}/categorie/detail/${id}`);
    return {
        type: FETCH_CATEGORIE,
        payload: request
    }
}