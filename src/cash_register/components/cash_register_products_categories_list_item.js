import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCategorie } from './../actions/index';
import './cash_register_products_categories_list_item.css';

class CashRegisterProductsCategoriesListItem extends Component {
    
    selectCategorie(item) {
        this.props.selectCategorie(item);
    }
    render() {
        return (
            <button className="btn cr_products_categories_list_item" onClick={() => { this.selectCategorie(this.props.title) }}>
                {this.props.title}
            </button>
            
        );
    }
    
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectCategorie }, dispatch)
}
export default connect(null, mapDispatchToProps)(CashRegisterProductsCategoriesListItem);