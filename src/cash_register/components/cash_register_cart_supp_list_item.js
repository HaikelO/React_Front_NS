import React, { Component } from 'react';


class CashRegisterCartSuppListItem extends Component {

    render() {
        return (

            <tr>
                <td>{this.props.value}</td>
                <td> {this.props.title}</td>
                <td>{this.props.price}</td>
                <td></td>
            </tr>
        );
    }
}

export default CashRegisterCartSuppListItem;