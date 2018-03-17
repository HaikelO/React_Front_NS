import { CART_ADD_PRODUCT, CART_DROP_PRODUCT } from './../actions';

export default function (state = 0, action) {
    switch (action.type) {
        case CART_ADD_PRODUCT:
            return state + action.payload.price;
        case CART_DROP_PRODUCT:
            return state - action.payload.price;
        default:
            return state;
    }
}