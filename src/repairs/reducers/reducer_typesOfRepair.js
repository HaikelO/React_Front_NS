import { FETCH_TYPES_OF_REPAIR } from './../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_TYPES_OF_REPAIR:
            return action.payload;
        default:
            return state;
    }
}