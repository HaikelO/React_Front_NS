import React, { Component } from 'react';
import CashRegisterPaymentListItem from './cash_register_payment_list_item';

class CashRegisterPaymentList extends Component {
    renderListItem({ title }) {        
        return <CashRegisterPaymentListItem title={title} key={title} />
    }
    render() {
        const list = [{ title: "Cash" }, { title: "CB" }, { title: "Ticket Resto" }];
        return list.map(this.renderListItem);
    }
}

export default CashRegisterPaymentList;