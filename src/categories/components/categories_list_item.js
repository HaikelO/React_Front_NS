import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CategoriesListItem extends Component {
    render() {
        const id = this.props.item._id;
        const url = "/categorie/detail/" + id;
        const { title } = this.props.item;
        return (
            <tr>
                <td></td>
                <td><Link to={url}>{title}</Link></td>
                <td></td>
            </tr>
        );
    }
}

export default CategoriesListItem;