import { combineReducers } from 'redux';

import BillsReducer from './../billing/reducers/reducer_bills';
import ActiveCategorieReducer from './../cash_register/reducers/reducer_cashregister_active_categorie';
import CartReducer from './../cash_register/reducers/reducer_cashregister_cart';
import CartTotalReducer from './../cash_register/reducers/reducer_cashregister_cart_total';
import ModalReducer from './../cash_register/reducers/reducer_cashregister_modal';
import PaymentReducer from './../cash_register/reducers/reducer_cashregiter_payment';
import CategoriesReducer from './../categories/reducers/reducer_categories';

const rootReducer = combineReducers({
    bills: BillsReducer,
    activeCategorie: ActiveCategorieReducer,
    cart: CartReducer,
    total: CartTotalReducer,
    modal: ModalReducer,
    payment: PaymentReducer,
    categories: CategoriesReducer
});

export default rootReducer;
