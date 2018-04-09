import axios from 'axios';
import { ROOT_URL } from './../../_params/index';
export const FETCH_CLIENTS = "fetch_clients";
export const FETCH_CLIENT = "fetch_client";
export const ADD_CLIENT = "add_client";
export const DELETE_CLIENT = "delete_client";

export function fetchClients() {
    const request = axios.get(`${ROOT_URL}/clients`);
    return {
        type: FETCH_CLIENTS,
        payload: request
    }
}

export function fetchClient(id) {
    const request = axios.get(`${ROOT_URL}/client/detail/${id}`);
    return {
        type: FETCH_CLIENT,
        payload: request
    }
}

export function addClient(item, callback) {
    const request = axios.post(`${ROOT_URL}/client/add`, item).then((result) => { return callback(result) });
    return {
        type: ADD_CLIENT,
        payload: request
    }
}

export function deleteClient(id, callback) {
    const request = axios.delete(`${ROOT_URL}/client/${id}`).then((result => { return callback(result) }));
    return {
        type: DELETE_CLIENT,
        payload: request
    }
}