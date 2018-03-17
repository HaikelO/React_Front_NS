import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './cash_register_cart_list_item.css';
import { dropProductFromCart, editProductFromCart } from './../actions/index';
import CashRegisterCartSuppShow from './cash_register_cart_supp_show';

class CashRegisterCartListItem extends Component {
    dropProduct() {
        const product = {
            title: this.props.title,
            price: this.props.price,
            index: this.props.index
        }
        this.props.dropProductFromCart(product);
    }
    editProduct() {
        this.props.editProductFromCart(this.props.index)
    }
    render() {
        let { index } = this.props;
        return (
            <tbody>
                <tr className="product_item">
                    <td>{this.props.quantity}</td>
                    <td>{this.props.title}</td>
                    <td>{this.props.price}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() => { this.editProduct() }}>Edit</button>
                        <button className="btn btn-danger" onClick={() => { this.dropProduct() }}>X</button>
                    </td>
                </tr>
                <CashRegisterCartSuppShow indexProduit={index} />
            </tbody>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ dropProductFromCart, editProductFromCart }, dispatch);
}
export default connect(null, mapDispatchToProps)(CashRegisterCartListItem);