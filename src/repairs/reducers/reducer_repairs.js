import { FETCH_REPAIRS, ADD_REPAIR } from './../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_REPAIRS:            
            return action.payload.data.SUCCESS;
        default:
            return state;
    }
}