import React, { Component } from 'react';

class UsersListItem extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

export default UsersListItem;