import React, { Component } from 'react';
import UsersListItem from './users_list_item';

class UsersShow extends Component {
    renderListItem(item) {
        return <UsersListItem key={item.name} name={item.name} />
    }
    render() {
        const list = [{ name: "Momo" }, { name: "François" }, { name: "Leticia" }];
        return (
            <div>
                {list.map(this.renderListItem)}
            </div>
        );
    }
}

export default UsersShow;