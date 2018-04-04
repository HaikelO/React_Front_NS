import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavigationShow from './../../_components/navigation/navigation_show';
import BillList from './bills_list';


class BillsShow extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <NavigationShow />
                </div>
                <div className="col-md-8">
                    <Link to="/bill/add"><button className="btn btn-primary">Ajouter</button></Link>
                    <BillList />
                </div>
            </div>
        )
    }
}

export default BillsShow;