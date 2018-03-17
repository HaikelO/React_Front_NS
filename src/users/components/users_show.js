import React, { Component } from 'react';
import NavigationShow from './../../_components/navigation/navigation_show';

class UsersShow extends Component {
    render() {
        return (
            <div className="row">
                <NavigationShow className="col-md-4" />
                <div className="col-md-8">
                    Users!
                </div>
            </div>
        );
    }
}

export default UsersShow;