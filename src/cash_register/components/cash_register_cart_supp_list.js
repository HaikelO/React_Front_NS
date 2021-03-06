import React, { Component } from 'react';
import { connect } from 'react-redux';
import CashRegisterCartSuppListItem from './cash_register_cart_supp_list_item';

class CashRegisterCartSuppList extends Component {
    renderListItem(item, index) {
        let key = "supp" + index;
        return <CashRegisterCartSuppListItem title={item.title} price={item.price} key={key} value={item.value} />
    }
    render() {
        const { cart, indexProduit } = this.props;
        let list = {};
        let array = [];
        
        if (cart[indexProduit].supp !== null) {
            list = cart[indexProduit].supp;
        }        
        
        for (let o in list) {
            
            let item = {};            
            item.title = o;
            item.value = cart[indexProduit].supp[o];
            item.price = 0;
            array.push(item);
        }

        return array.map((item, index) => this.renderListItem(item, index));
    }
}
function mapStateTopProps(state) {
    return {
        cart: state.cart
    }
}
export default connect(mapStateTopProps)(CashRegisterCartSuppList);