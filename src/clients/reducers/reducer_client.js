import { FETCH_CLIENT } from './../actions/index';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_CLIENT:
            return action.payload.data.SUCCESS
        default:
            return state;
    }
}