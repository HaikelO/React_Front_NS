import Datastore from 'nedb';
var db = new Datastore({ filename: 'data/datafile.json', autoload: true });


export const CATEGORIE_SELECTED = "categorie_selected";
export const CART_ADD_PRODUCT = "cart_add_product";
export const CART_DROP_PRODUCT = "cart_drop_product";
export const CART_EDIT_PRODUCT = "cart_edit_product";
export const CLOSE_MODAL= "close_modal";
export const OPEN_MODAL = "open_modal";
export const CART_ADD_SUPP = "cart_add_supp";
export const CART_DEL_SUPP = "cart_del_supp";
export const ADD_PRODUCT_DB = "add_product_db";
export const FETCH_PRODUCT_DB = "fetch_product_db";
export const OPEN_PAYMENT_MODAL = "open_payment_modal";
export const CLOSE_PAYMENT_MODAL = "close_payment_modal";


export function selectCategorie(categorie) {
    return {
        type: CATEGORIE_SELECTED,
        payload: categorie
    }
}

export function addProductToCart(product) {
    return {
        type: CART_ADD_PRODUCT,
        payload: product
    }
}

export function dropProductFromCart(product) {
    return {
        type: CART_DROP_PRODUCT,
        payload: product
    }
}

export function editProductFromCart(value){
    return {
        type : CART_EDIT_PRODUCT,
        payload: value
    }
}

export function closeModal(value) {
    return {
        type: CLOSE_MODAL,
        payload: value
    }
}

export function openModal(value){
    return {
        type: OPEN_MODAL,
        payload: value
    }
}

export function addSuppToCart (value){
    return{
        type : CART_ADD_SUPP,
        payload : value
    }
}
export function delSuppToCart (value){
    return{
        type : CART_DEL_SUPP,
        payload : value
    }
}

export function addProductToDB (value){
    const request = db.insert(value, function(err, data){
        console.log(data);
    });
    return{
        type : ADD_PRODUCT_DB,
        payload : request
    }
}
export function fetchProductFromDB (){
    const request = db.find({},function(err, data){
        return data;
    });
    return {
        type : FETCH_PRODUCT_DB,
        payload : request
    }
}

export function openPaymentModal(item) {
    return {
        type: OPEN_PAYMENT_MODAL,
        payload: item
    }
}

export function closePaymentModal(item) {
    return {
        type: CLOSE_PAYMENT_MODAL,
        payload: item
    }
}