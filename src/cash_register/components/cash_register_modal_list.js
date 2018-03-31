import React, { Component } from 'react';
import CashRegisterModalListItem from './cash_register_modal_list_item';
import { connect } from 'react-redux';

class CashRegisterModalList extends Component {
    renderListItem(item, index, indexProduit) {
        const key = "modal_supp" + index;
        let value = 0;

        if (this.props.cart[indexProduit].supp) {
            if (this.props.cart[indexProduit].supp[item.title])
                value = this.props.cart[indexProduit].supp[item.title];
        }

        return <CashRegisterModalListItem title={item.title} key={key} value={value} indexProduit={indexProduit} />
    }
    render() {
        const indexProduit = this.props.index;
        const list = [{ title: "Ketchup", categorie: "sauce" }, { title: "BBQ", categorie: "sauce" }, { title: "Cheezy", categorie: "sauce" }, { title: "Mayonnaise", categorie: "sauce" }, { title: "Moutarde", categorie: "sauce" }];

        return list.map((item, index) => this.renderListItem(item, index, indexProduit));

    }
}
function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps)(CashRegisterModalList);