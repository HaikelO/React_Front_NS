import React, { Component } from 'react';
import CategoriesListItem from './categories_list_item';

class CategoriesList extends Component {
    renderListItem(item) {
        return <CategoriesListItem key={item.title} title={item.title} />
    }
    render() {
        const list = [{ title: "Catergorie A" }, { title: "Catergorie B" }, { title: "Catergorie C" }];
        return (
            <div>
                {list.map(this.renderListItem)}
            </div>
        );
    }
}

export default CategoriesList;