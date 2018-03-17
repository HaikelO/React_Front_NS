import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationListItem extends Component {
    render() {
        return (
            <Link className="nav-item" to={this.props.path}>
                {this.props.title}
            </Link>
        );
    }
}
export default NavigationListItem;