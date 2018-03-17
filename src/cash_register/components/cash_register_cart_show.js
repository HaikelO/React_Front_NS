import React, { Component } from 'react';
import CashRegisterCartList from './cash_register_cart_list';
import CashRegisterCartTotal from './cash_register_cart_total';

class CashRegisterCartShow extends Component {
    render() {
        return (
            <div>
                Cart
                <CashRegisterCartList />
                <CashRegisterCartTotal />
            </div>
        );
    }
}

export default CashRegisterCartShow;