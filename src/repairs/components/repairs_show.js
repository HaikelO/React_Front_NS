import React, { Component } from 'react';
import RepairsList from './repairs_list';
import { Link } from 'react-router-dom';
import NavigationShow from './../../_components/navigation/navigation_show';

class RepairsShow extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <NavigationShow />
                </div>
                <div className="col-md-8">
                    <Link to="/repair/add"><button className="btn btn-primary">Ajouter</button></Link>
                    <RepairsList />
                </div>
            </div>            
        );
    }
}

export default RepairsShow;