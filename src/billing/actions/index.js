import axios from 'axios';

export const FETCH_BILLS = 'fetch_bills';

const ROOT_URL = "http://localhost:9090/api";

export function fetchBills() {
    const request = axios.get(`${ROOT_URL}/bills`);
    console.log('Request', request);
    return {
        type: FETCH_BILLS,
        payload: request
    }
}