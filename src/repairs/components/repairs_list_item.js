import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RepairsListItem extends Component {
    handleEtat(item) {
        if (item === true) {
            return <span>Traité</span>
        } else {
            return <span>En cours de traitement</span>
        }
    }
    render() {
        const url = "/repair/detail/" + this.props.id;

        return (
            <tr>
                <td></td>
                <td><Link to={url}>{this.props.title}</Link ></td>
                <td><Link to={url}>{this.props.client}</Link ></td>
                <td><Link to={url}>{this.handleEtat(this.props.etat)}</Link ></td>
            </tr>
        );
    }
}

export default RepairsListItem;