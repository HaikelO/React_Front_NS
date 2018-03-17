import _ from 'lodash';
import { FETCH_PRODUCTS } from './../../products/actions/index';
import { SELECT_CATEGORIE } from './../actions/index';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return _.mapKeys(action.payload.data, 'id');
        case SELECT_CATEGORIE :
            return action.payload.data;
        default:
            return state;
    }
}