import React, { Component } from 'react';

class ProductsListItem extends Component {

    render() {
        const { title } = this.props;
        return (
            <tr>
                <td></td>
                <td>{title}</td>
            </tr>
        );
    }
}

export default ProductsListItem;