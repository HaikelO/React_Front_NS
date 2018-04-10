import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteProduct } from './../actions/index';
import { bindActionCreators } from 'redux';

class ProductsListItem extends Component {
    constructor(props) {
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this);
    }
    deleteProduct() {
        this.props.deleteProduct(this.props.item._id).then(() => {
            this.props.history.push('/products');
        });
    }
    render() {
        const { title, _id } = this.props.item;
        const url = `/product/detail/${_id}`;
        return (
            <tr>
                <td></td>
                <td><Link to={url}> {title}</Link></td>
                <td><button className="btn btn-danger" onClick={this.deleteProduct}>X</button></td>
            </tr >
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ deleteProduct }, dispatch);
}
export default connect(null, mapDispatchToProps)(ProductsListItem);