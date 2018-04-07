import React, { Component } from 'react';
import NavigationListItem from './navigation_list_item';


class NavigationList extends Component {
    renderNavigationListItem(item) {
        return <NavigationListItem key={item.title} path={item.path} title={item.title} />
    }
    render() {
        const list = [{ title: "Cash Register", path: "/" },{ title: "Repairs", path: "/repairs" }, { title: "Bills", path: "/bills" },{ title: "Clients", path: "/clients" },{ title: "Products", path: "/products" },{ title: "Categories", path: "/categories" }, { title: "Users", path: "/users" }, { title: "Profil", path: "/profil" }]
        return (
            <nav className="navbar justify-content-center">
                {list.map(this.renderNavigationListItem)}
            </nav>
        );
    }
}

export default NavigationList;