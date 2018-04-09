import { combineReducers } from 'redux';

import BillsReducer from './../billing/reducers/reducer_bills';
import ActiveCategorieReducer from './../cash_register/reducers/reducer_cashregister_active_categorie';
import CartReducer from './../cash_register/reducers/reducer_cashregister_cart';
import CartTotalReducer from './../cash_register/reducers/reducer_cashregister_cart_total';
import ModalReducer from './../cash_register/reducers/reducer_cashregister_modal';
import PaymentReducer from './../cash_register/reducers/reducer_cashregiter_payment';
import CategoriesReducer from './../categories/reducers/reducer_categories';
import CategorieReducer from './../categories/reducers/reducer_categorie';
import TypesOfRepairsReducer from './../repairs/reducers/reducer_typesOfRepair';
import RepairsReducer from './../repairs/reducers/reducer_repairs';
import RepairReducer from './../repairs/reducers/reducer_repair';
import ProductsReducer from './../products/reducers/reducer_products';
import ProductReducer from './../products/reducers/reducer_product';
import ClientsReducer from './../clients/reducers/reducer_clients';
import ClientReducer from './../clients/reducers/reducer_client';
import UsersReducer from './../users/reducers/reducer_users';
import UsertReducer from './../users/reducers/reducer_user';

const rootReducer = combineReducers({
    bills: BillsReducer,
    activeCategorie: ActiveCategorieReducer,
    cart: CartReducer,
    total: CartTotalReducer,
    modal: ModalReducer,
    payment: PaymentReducer,
    categories: CategoriesReducer,
    categorie: CategorieReducer,
    typeOfRepair: TypesOfRepairsReducer,
    repairs: RepairsReducer,
    repair: RepairReducer,
    products: ProductsReducer,
    product: ProductReducer,
    clients: ClientsReducer,
    client: ClientReducer,
    users: UsersReducer,
    user: UsertReducer
});

export default rootReducer;
