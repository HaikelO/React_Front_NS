import axios from 'axios';
import { ROOT_URL } from './../../_params/index';
export const ADD_USER = "add_user";
export const FETCH_USERS = "fetch_users";
export const FETCH_USER = "fetch_user";
export const DELETE_USER = "delete_user";

export function addUser(item, callback) {
    const request = axios.post(`${ROOT_URL}/user/add`, item).then((result) => { return callback(result) });
    return {
        type: ADD_USER,
        action: request
    }
}

export function fetchUsers() {
    const request = axios.get(`${ROOT_URL}/users`);
    return {
        'type': FETCH_USERS,
        'payload': request
    }
}

export function fetchUser(id) {
    const request = axios.get(`${ROOT_URL}/user/detail/${id}`);
    console.log(request);
    return {
        'type': FETCH_USER,
        'payload': request
    }
}

export function deleteUser(id, callback) {
    const request = axios.delete(`${ROOT_URL}/user/${id}`).then((result) => { callback(result) });
    return {
        type: DELETE_USER,
        action: request
    }
}