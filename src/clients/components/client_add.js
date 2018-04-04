import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ClientAdd extends Component {
    render() {
        return (
            <div>
                <Link to="/clients"><button className="btn btn-primary">Retour</button></Link>
                <div className="form-group">
                    <label>Nom :</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Prenom :</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Adresse :</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Code Postal :</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Pays :</label>
                    <input type="text" />
                </div>
            </div>
        )
    }
}

export default ClientAdd;