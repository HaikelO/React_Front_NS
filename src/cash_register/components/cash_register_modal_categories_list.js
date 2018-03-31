import React, { Component } from 'react';
import CashRegisterModalCategoriesListItem from './cash_register_modal_categories_list_item'

class CashRegisterModalCategoriesList extends Component {
    renderListItem(item, index) {
        index = index + 200;
        return <CashRegisterModalCategoriesListItem title={item.title} key={item.title} />
    }
    render() {
        const list = [{ title: "Sauce", categorie: "sauce" }, { title: "Extra", categorie: "extra" }];
        return (
            <div>
                {list.map((item, index) => this.renderListItem(item, index))}
            </div>
        );
    }
}

export default CashRegisterModalCategoriesList;