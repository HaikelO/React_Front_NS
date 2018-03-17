import React, { Component } from 'react';
import { connect } from 'react-redux';
import CashRegisterProductsListItem from './cash_register_products_list_item';


class CashRegisterProductsList extends Component {
    renderListItem(item) {
        return <CashRegisterProductsListItem title={item.title} key={item.title} />;
    }
    render() {
        let list = [{ title: "Produit A", categorie: "Categorie A" }, { title: "Produit B", categorie: "Categorie A" }, { title: "Produit C", categorie: "Categorie A" }, { title: "Produit D", categorie: "Categorie B" }, { title: "Produit E", categorie:"Categorie B" }, { title: "Produit F", categorie:"Categorie B" }, { title: "Produit G", categorie:"Categorie C" }, { title: "Produit H", categorie:"Categorie C" }, { title: "Produit I", categorie:"Categorie C" }, { title: "Produit J", categorie:"Categorie D" }];
        if (this.props.categorie) {            
            list = list.filter((product) => this.props.categorie === product.categorie);            
        }
        return list.map(this.renderListItem);
    }
}
function mapStateToProps(state) {
    return {
        categorie: state.activeCategorie
    }
}
export default connect(mapStateToProps)(CashRegisterProductsList);