import React, { Component } from 'react';

class CashRegisterModalCategoriesListItem extends Component {
    render() {
        return (
            
             <button className="btn btn-primary">{this.props.title}</button>
        
        );
    }
}

export default CashRegisterModalCategoriesListItem;