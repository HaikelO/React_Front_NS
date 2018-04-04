import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ClientsList from './clients_list';
import NaviagationShow from './../../_components/navigation/navigation_show';

class ClientsShow extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <NaviagationShow />
                </div>
                <div className="col-md-8">
                    <Link to="/client/add"><button className="btn btn-primary">Ajouter</button></Link>
                    <ClientsList />
                </div>
            </div>
        )
    }
}

export default ClientsShow;