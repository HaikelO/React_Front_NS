import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductsList from './products_list';
import NavigationShow from './../../_components/navigation/navigation_show';

class ProductsShow extends Component {

    render() {

        const list = [{ title: "toto" }, { title: "tata" }, { title: "tete" }];
        return (
            <div className="row">
                <div className="col-md-4">
                    <NavigationShow />
                </div>
                <div className="col-md-8">
                    <Link to="/product/add"><button className="btn btn-primary">Ajouter</button></Link>
                    <ProductsList list={list} />
                </div>                
            </div>
        );
    }
}

export default ProductsShow;