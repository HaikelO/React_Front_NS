import React, {Component } from 'react';

class BillsListItem extends Component{
    render(){
        return (
            <div>{this.props.name}</div>
        );
    }
}

export default BillsListItem;