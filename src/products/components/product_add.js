import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavigationShow from './../../_components/navigation/navigation_show';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addProduct } from './../actions/index';

class ProductAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            categorie: "",
            prix: 0,
            fournisseur: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }
    renderOption(item) {
        return <option key={item.value} value={item.value}>{item.title}</option>
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    addProduct() {
        this.props.addProduct(this.state, (result) => {
            this.props.history.push('/products');
        });
    }
    render() {
        const list = [{ value: "categorie A", title: "Categorie A" }, { value: "categorie B", title: "Categorie B" }, { value: "categorie C", title: "Categorie C" }];
        return (
            <div className="row">
                <div className="col-md-4">
                    <NavigationShow />
                </div>
                <div className="col-md-8">
                    <Link to="/products"><button className="btn btn-primary">Retour</button></Link>
                    <div className="form-group">
                        <label>Title :</label>
                        <input type="text" onChange={this.handleInputChange} className="form-control" name="title" id="title" />
                    </div>
                    <div className="form-group">
                        <label>Description :</label>
                        <input type="text" onChange={this.handleInputChange} className="form-control" name="description" id="description" />
                    </div>
                    <div className="form-group">
                        <label>Categorie :</label>
                        <select onChange={this.handleInputChange} className="form-control" name="categorie" id="categorie"  >
                            {list.map(this.renderOption)}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Prix :</label>
                        <input type="text" onChange={this.handleInputChange} className="form-control" name="prix" id="prix" />
                    </div>
                    <div className="form-group">
                        <label>Fournisseur :</label>
                        <input type="text" onChange={this.handleInputChange} className="form-control" name="fournisseur" id="fournisseur" />
                    </div>
                    <button className="btn btn-success" onClick={this.addProduct}>Enregistrer</button>
                </div>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addProduct }, dispatch);
}
export default connect(null, mapDispatchToProps)(ProductAdd);