import React, { Component } from 'react';
import CashRegisterCartSuppList from './cash_register_cart_supp_list';

class CashRegisterCartSuppShow extends Component {
    render() {
        const { indexProduit } = this.props;
        return (
            <CashRegisterCartSuppList indexProduit={indexProduit} />
        );
    }
}

export default CashRegisterCartSuppShow;