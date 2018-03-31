import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductAdd extends Component {
    render() {
        return (
            <div>
                <Link to="/products"><button className="btn">Retour</button></Link>
                <div className="form-group">
                    <label>Title :</label>
                    <input type="text" name="title" id="title" />
                </div>
                <div className="form-group">
                    <label>Description :</label>
                    <input type="text" name="description" id="description" />
                </div>
                <div className="form-group">
                    <label>Categorie :</label>
                    <input type="text" name="categorie" id="categorie" />
                </div>
                <div className="form-group">
                    <label>Prix :</label>
                    <input type="text" name="prix" id="prix" />
                </div>
                <div className="form-group">
                    <label>Fournisseur :</label>
                    <input type="text" name="fournisseur" id="fournisseur" />
                </div>
            </div>
        );
    }
}

export default ProductAdd;