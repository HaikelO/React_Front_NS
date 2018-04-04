import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavigationShow from './../../_components/navigation/navigation_show';
import UsersList from './users_list';


class UsersShow extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <NavigationShow />
                </div>
                <div className="col-md-8">
                    <Link to="/user/add"><button className="btn btn-primary">Ajouter</button></Link>
                    <UsersList />
                </div>
            </div>
        );
    }
}

export default UsersShow;