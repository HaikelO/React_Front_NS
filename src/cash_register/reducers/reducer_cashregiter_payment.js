import { OPEN_PAYMENT_MODAL, CLOSE_PAYMENT_MODAL } from './../actions';

export default function (state = { modalIsOpen: false }, action) {
    switch (action.type) {
        case OPEN_PAYMENT_MODAL:
            return {
                ...state,
                modalIsOpen: true
            }
        case CLOSE_PAYMENT_MODAL:
            return {
                ...state,
                modalIsOpen: false
            }
        default:
            return state;
    }
}