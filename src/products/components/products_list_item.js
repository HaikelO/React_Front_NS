import React, { Component } from 'react';

class ProductsListItem extends Component {

    render() {
        const { title } = this.props;
        return (
            <li>Title :{title}</li>
        );
    }
}

export default ProductsListItem;