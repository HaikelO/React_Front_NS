import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UsersListItem extends Component {
    render() {
        const url = "/user/detail/" + this.props.item._id;
        return (
            <tr>
                <td></td>
                <td><Link to={url}>{this.props.item.lastname} {this.props.item.name}</Link></td>
                <td><Link to={url}>{this.props.item.type}</Link></td>
                <td><Link to={url}>{this.props.item.etat}</Link></td>
            </tr >
        );
    }
}

export default UsersListItem;