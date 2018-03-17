import React, { Component } from 'react';
import ProductsList from './products_list';
import NavigationShow from './../../_components/navigation/navigation_show';

class ProductsShow extends Component {

    render() {

        const list = [{ title: "toto" }, { title: "tata" }, { title: "tete" }];
        return (
            <div className="row">
                <NavigationShow className="col-md-4" />
                <ProductsList list={list} className="col-md-8"/>
            </div>
        );
    }
}

export default ProductsShow;