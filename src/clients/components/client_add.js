import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavigationShow from './../../_components/navigation/navigation_show';
import { addClient } from './../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ClientAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastname: "",
            name: "",
            adress: "",
            zip: "",
            country: "",
            email: "",
            phone: "",
            type:""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.addClient = this.addClient.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    addClient() {
        this.props.addClient(this.state, (result) => {
            this.props.history.push('/clients');
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <NavigationShow />
                </div>
                <div className="col-md-8">
                    <Link to="/clients"><button className="btn btn-primary">Retour</button></Link>
                    <div className="form-group">
                        <label>Nom :</label>
                        <input type="text" className="form-control" onChange={this.handleInputChange} name="lastname" />
                    </div>
                    <div className="form-group">
                        <label>Prenom :</label>
                        <input type="text" className="form-control" onChange={this.handleInputChange} name="name" />
                    </div>
                    <div className="form-group">
                        <label>Adresse :</label>
                        <input type="text" className="form-control" onChange={this.handleInputChange} name="adress" />
                    </div>
                    <div className="form-group">
                        <label>Code Postal :</label>
                        <input type="text" className="form-control" onChange={this.handleInputChange} name="zip" />
                    </div>
                    <div className="form-group">
                        <label>Pays :</label>
                        <input type="text" className="form-control" onChange={this.handleInputChange} name="country" />
                    </div>
                    <div className="form-group">
                        <label>Mail :</label>
                        <input type="email" className="form-control" onChange={this.handleInputChange} name="email" />
                    </div>
                    <div className="form-group">
                        <label>Téléphone :</label>
                        <input type="text" className="form-control" onChange={this.handleInputChange} name="phone" />
                    </div>
                    <div className="form-group">
                        <label>Type :</label>
                        <select className="form-control" onChange={this.handleInputChange} name="type">
                            <option value="professional">Professionnel</option>
                            <option value="private">Particulier</option>
                        </select>
                    </div>
                    <button className="btn btn-success" onClick={this.addClient}>Enrgistrer</button>
                </div>
            </div>
        )
    }
}
function mapDisptchToProps(dispatch) {
    return bindActionCreators({ addClient }, dispatch);
}
export default connect(null, mapDisptchToProps)(ClientAdd);