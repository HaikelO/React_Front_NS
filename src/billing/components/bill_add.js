import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BillAdd extends Component {
    render() {
        return (
            <div>
                <Link to="/bills"><button className="btn btn-primary">Retour</button></Link>
                <div className="form-group">
                    <label>Client</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input type="date" />
                </div>
            </div>
        )
    }
}

export default BillAdd;