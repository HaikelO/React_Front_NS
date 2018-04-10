import _ from 'lodash';
import { FETCH_PRODUCTS, DELETE_PRODUCT } from './../actions/index'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return action.payload.data.SUCCESS;
        case DELETE_PRODUCT:
            return _.remove(state, (n) => n._id == action.payload);
        default:
            return state;
    }
}