import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CategorieAdd extends Component {
    render() {
        return (
            <div>
                <Link to="/categories"><button className="btn">Retour</button></Link>
                <label id="title">Title:</label>
                <input type="text" name="title" id="title" />
            </div>
        );
    }
}

export default CategorieAdd;