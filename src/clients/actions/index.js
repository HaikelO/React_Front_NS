import axios from 'axios';
import { ROOT_URL } from './../../_params/index';

export const FETCH_CLIENT = "fetch_client";

export function fetchClients() {
    const request = axios.get(`${ROOT_URL}/clients`);
    console.log("Clients", request);
    return {
        type: FETCH_CLIENT,
        payload: request
    }
}