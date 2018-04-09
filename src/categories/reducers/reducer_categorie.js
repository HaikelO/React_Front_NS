import { FETCH_CATEGORIE } from './../actions/index';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_CATEGORIE:
            return action.payload.data.SUCCESS;
        default:
            return state;
    }
}