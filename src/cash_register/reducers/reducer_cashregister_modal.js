import { CART_ADD_PRODUCT, CLOSE_MODAL, OPEN_MODAL, CART_EDIT_PRODUCT } from './../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case CART_ADD_PRODUCT:
            return { isOpen: true, index: action.payload.index };
        case CART_EDIT_PRODUCT:
            return { isOpen: true, index: action.payload };
        case CLOSE_MODAL:
            return { isOpen: false };
        case OPEN_MODAL:
            return { isOpen: true, index: action.payload.index };
        default:
            return state;
    }
}