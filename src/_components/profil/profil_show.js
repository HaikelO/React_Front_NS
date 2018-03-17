import React, { Component } from 'react';
import NavigationShow from './../navigation/navigation_show';

class ProfilShow extends Component {
    render() {
        return (
            <div className="row">
                <NavigationShow className="col-md-4" />
                <div className="col-md-8">
                    Profil
                </div>
            </div>
        );
    }
}
export default ProfilShow;