import axios from 'axios';
import { ROOT_URL } from './../../_params/index';

export const FETCH_TYPES_OF_REPAIR = "fetch_types_of_repair";
export const FETCH_REPAIRS = "fetch_repairs";
export const ADD_REPAIR = "add_repair";
export const FETCH_REPAIR = "fetch_repair";



export function fetchTypesOfRepair() {
    const types = [{ 'title': "Type A" }, { 'title': "Type B" }, { 'title': "Type C" }, { 'title': "Type D" }];
    return {
        'type': FETCH_TYPES_OF_REPAIR,
        'payload': types
    }
}

export function fetchRepairs() {
    const request = axios.get(`${ROOT_URL}/repairs`).then((response) => {
        return response;
    })
        .catch((error) => {
            console.log(error);
        });
    return {
        'type': FETCH_REPAIRS,
        'payload': request
    }
}

export function fetchRepair(id) {
    const request = axios.get(`${ROOT_URL}/repair/${id}`);
    return {
        'type': FETCH_REPAIR,
        'payload': request
    }
}

export function addRepair(item, callback) {
    const request = axios.post(`${ROOT_URL}/repair/add`, item).then((res) => { return callback(res) });
    return {
        'type': ADD_REPAIR,
        'payload': request
    }
}

