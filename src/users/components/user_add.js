import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class UserAdd extends Component {
    render() {
        return (
            <div>
                <Link to="/users"><button className="btn btn-primary">Retour</button></Link>
                <div className="form-group">
                    <label>Nom :</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Penom :</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Type :</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Tel :</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Mail :</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Adresse :</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Code postal :</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Pays :</label>
                    <input type="text" />
                </div>
            </div>
        );
    }
}

export default UserAdd;