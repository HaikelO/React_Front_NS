import axios from 'axios';
import { ROOT_URL } from './../../_params/index';

export const FETCH_BILLS = 'fetch_bills';

export function fetchBills() {
    const request = axios.get(`${ROOT_URL}/bills`);
    console.log('Request', request);
    return {
        type: FETCH_BILLS,
        payload: request
    }
}