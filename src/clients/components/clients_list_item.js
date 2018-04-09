import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ClientsListItem extends Component {
    render() {
        const id = this.props.item._id;
        const url = "/client/detail/" + id;
        const { lastname, type } = this.props.item;
        return (
            <tr>
                <td></td>
                <td><Link to={url}> {lastname}</Link></td>
                <td><Link to={url}> {type}</Link></td>
                <td></td>

            </tr>
        )
    }
}
export default ClientsListItem;