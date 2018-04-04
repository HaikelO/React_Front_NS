import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductAdd extends Component {
    renderOption(item) {
        return <option value={item.value}>{item.title}</option>
    }

    render() {
        const list = [{ value: "categorie A", title: "Categorie A" }, { value: "categorie B", title: "Categorie B" }, { value: "categorie C", title: "Categorie C" }];
        return (
            <div>
                <Link to="/products"><button className="btn btn-primary">Retour</button></Link>
                <div className="form-group">
                    <label>Title :</label>
                    <input type="text" className="form-control" name="title" id="title" />
                </div>
                <div className="form-group">
                    <label>Description :</label>
                    <input type="text" className="form-control" name="description" id="description" />
                </div>
                <div className="form-group">
                    <label>Categorie :</label>
                    <select id="monselect" className="form-control">
                        {list.map(this.renderOption)}
                    </select>
                </div>
                <div className="form-group">
                    <label>Prix :</label>
                    <input type="text" className="form-control" name="prix" id="prix" />
                </div>
                <div className="form-group">
                    <label>Fournisseur :</label>
                    <input type="text" className="form-control" name="fournisseur" id="fournisseur" />
                </div>
            </div>
        );
    }
}

export default ProductAdd;