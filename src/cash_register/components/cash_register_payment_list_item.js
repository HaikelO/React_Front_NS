import React, { Component } from 'react';

class CashRegisterPaymentListItem extends Component {

    render() {

        return (
            <button>
                {this.props.title}
            </button>
        );
    }
}

export default CashRegisterPaymentListItem;