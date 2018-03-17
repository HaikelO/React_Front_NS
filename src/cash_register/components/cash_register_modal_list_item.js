import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addSuppToCart, delSuppToCart } from './../actions/index';

class CashRegisterModalListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    addSupp(title, indexProduit) {
        const obj = {
            indexProduit: indexProduit,
            title: title
        }
        return this.props.addSuppToCart(obj);
    }
    delSupp(title, indexProduit) {
        const obj = {
            indexProduit: indexProduit,
            title: title
        }
        return this.props.delSuppToCart(obj);
    }
    render() {

        const { indexProduit, title, cart } = this.props;
        let value = 0;
        let supp = cart[indexProduit].supp;

        if (supp !== null && supp[title]) {
            value = supp[title];
        }

        /* if (this.props.cart[indexProduit].supp[title] === undefined) {
            value = 0;
        } else {
            value = this.props.cart[indexProduit].supp[title];
        } */
        /* 
                if (this.props.value[title]) {
                    this.setState({ value: this.props.value[title] });
                } */
        return (
            <div>
                {title}
                <button className="btn btn-warning" onClick={() => this.delSupp(title, indexProduit)}>Down</button>
                <span>{value}</span>
                <button className="btn btn-warning" onClick={() => this.addSupp(title, indexProduit)}>Up</button>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addSuppToCart, delSuppToCart }, dispatch);
}
function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CashRegisterModalListItem);