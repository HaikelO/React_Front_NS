import React, { Component } from 'react';
import ProductsListItem from './products_list_item';

class ProductsList extends Component {

    renderListItem(item) {

        return <ProductsListItem key={item.title} title={item.title} />

    }
    render() {

        return (
            <div>
                Products List !
                <ul>
                    {this.props.list.map(this.renderListItem)}
                </ul>
            </div>
        );
    }
}

export default ProductsList;