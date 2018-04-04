import axios from 'axios';

const ROOT_URL = "http://localhost:9090/api";

export const FETCH_CLIENT = "fetch_client";

export function fetchClients() {
    const request = axios.get(`${ROOT_URL}/clients`);
    console.log("Clients",request);
    return {
        type: FETCH_CLIENT,
        payload: request
    }
}