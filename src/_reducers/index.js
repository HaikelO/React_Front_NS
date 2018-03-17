import { combineReducers } from 'redux';
import ProductsReducer from './../products/reducers/reducer_products';
import BillsReducer from './../billing/reducers/reducer_bills';
import ActiveCategorieReducer from './../cash_register/reducers/reducer_cashregister_active_categorie';
import CartReducer from './../cash_register/reducers/reducer_cashregister_cart';
import CartTotalReducer from './../cash_register/reducers/reducer_cashregister_cart_total';
import ModalReducer from './../cash_register/reducers/reducer_cashregister_modal';

const rootReducer = combineReducers({
    bills: BillsReducer,
    activeCategorie: ActiveCategorieReducer,
    cart: CartReducer,
    total: CartTotalReducer,
    modal: ModalReducer
});

export default rootReducer;
