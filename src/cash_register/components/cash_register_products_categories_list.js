import React, { Component } from 'react';
import CashRegisterProductsCategoriesListItem from './cash_register_products_categories_list_item';

class CashRegisterCategoriesList extends Component {
    renderCategoriesListItem(item){
        return <CashRegisterProductsCategoriesListItem title={item.title} key={item.id} id={item.id}/>
    }
    render() {
        const list = [{title :"Categorie A",id:"13654"},{title :"Categorie B",id:"12654"},{title :"Categorie C",id:"32654"},{title :"Categorie D",id:"42654"}];
        return (
            <div>
                {list.map(this.renderCategoriesListItem)}
            </div>
        );
    }
}

export default CashRegisterCategoriesList;