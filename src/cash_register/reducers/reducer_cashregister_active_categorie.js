import _ from 'lodash';
import { CATEGORIE_SELECTED } from './../actions/index';

export default function (state = null, action) {
    switch (action.type) {
        case CATEGORIE_SELECTED:
            return action.payload;
        default:
            return state;
    }
}