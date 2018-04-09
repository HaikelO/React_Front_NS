import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ProductsListItem extends Component {

    render() {
        const { title, _id } = this.props.item;
        const url = `/product/detail/${_id}`;
        return (
            <tr>
                <td></td>
                <td><Link to={url}> {title}</Link></td>
            </tr >
        );
    }
}

export default ProductsListItem;