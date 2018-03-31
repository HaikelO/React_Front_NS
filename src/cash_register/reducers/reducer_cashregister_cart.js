import update from 'react-addons-update';
import { CART_ADD_PRODUCT, CART_DROP_PRODUCT, CART_ADD_SUPP, CART_DEL_SUPP } from './../actions';

export default function (state = [], action) {
    switch (action.type) {
        case CART_ADD_PRODUCT:
            action.payload.index = state.length;
            return [...state, action.payload];
        case CART_DROP_PRODUCT:
            return state.filter((_, i) => i !== action.payload.index);
        case CART_ADD_SUPP: {
            const { title, indexProduit } = action.payload;
            if (state[indexProduit].supp === null) {
                state[indexProduit].supp = {};
                state[indexProduit].supp[title] = 1;
            } else {
                state[indexProduit].supp[title] = (state[indexProduit].supp[title] === undefined) ? 1 : state[indexProduit].supp[title] + 1;
            }
            return update(state,
                {
                    [indexProduit]:
                        {
                            'supp': {
                                [title]: { $set: state[indexProduit].supp[title] }
                            }
                        }
                });
        }
        case CART_DEL_SUPP: {
            const { title, indexProduit } = action.payload;
            if (state[indexProduit].supp === null) {
                state[indexProduit].supp = {};
                state[indexProduit].supp[title] = 1;
            } else {
                state[indexProduit].supp[title] = (state[indexProduit].supp[title] === undefined) ? 1 : state[indexProduit].supp[title] - 1;
            }
            return update(state,
                {
                    [indexProduit]:
                        {
                            'supp': {
                                [title]: { $set: state[indexProduit].supp[title] }
                            }
                        }
                });
        }
        default:
            return state;
    }
}