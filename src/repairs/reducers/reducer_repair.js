import { FETCH_REPAIR } from './../actions/index';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_REPAIR:
            return action.payload.data.SUCCESS;
        default:
            return state;
    }
}