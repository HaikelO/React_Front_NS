import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from './categories_list';
import NavigationShow from './../../_components/navigation/navigation_show';


class CategoriesShow extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <NavigationShow />
                </div>
                <div className="col-md-8">
                    <Link to="/categorie/add"><button className="btn">Ajouter</button></Link>
                    <CategoriesList />
                </div>
            </div>
        );
    }
}

export default CategoriesShow;