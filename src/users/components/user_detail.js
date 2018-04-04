import React, { Component } from 'react';
import NavigationShow from './../../_components/navigation/navigation_show';

class UserDetail extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <NavigationShow />
                </div>
                <div className="col-md-8">
                    Users!
                </div>
            </div>
        );
    }
}

export default UserDetail;