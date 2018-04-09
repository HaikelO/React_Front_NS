import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavigationShow from './../../_components/navigation/navigation_show';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser } from './../actions/index';

class UserAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastname: "",
            name: "",
            type: "",
            phone: "",
            email: "",
            adress: "",
            zip: "",
            country: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addUser = this.addUser.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    addUser() {
        this.props.addUser(this.state, (result) => {
            this.props.history.push('/users');
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <NavigationShow />
                </div>
                <div className="col-md-8">
                    <Link to="/users"><button className="btn btn-primary">Retour</button></Link>
                    <div className="form-group">
                        <label>Nom :</label>
                        <input className="form-control" onChange={this.handleInputChange} type="text" name="lastname" />
                    </div>
                    <div className="form-group">
                        <label>Prenom :</label>
                        <input className="form-control" onChange={this.handleInputChange} type="text" name="name" />
                    </div>
                    <div className="form-group">
                        <label>Type :</label>
                        <input className="form-control" onChange={this.handleInputChange} type="text" name="type" />
                    </div>
                    <div className="form-group">
                        <label>Téléphone :</label>
                        <input className="form-control" onChange={this.handleInputChange} type="text" name="phone" />
                    </div>
                    <div className="form-group">
                        <label>Mail :</label>
                        <input className="form-control" onChange={this.handleInputChange} type="text" name="email" />
                    </div>
                    <div className="form-group">
                        <label>Adresse :</label>
                        <input className="form-control" onChange={this.handleInputChange} type="text" name="adress" />
                    </div>
                    <div className="form-group">
                        <label>Code postal :</label>
                        <input className="form-control" onChange={this.handleInputChange} type="text" name="zip" />
                    </div>
                    <div className="form-group">
                        <label>Pays :</label>
                        <input className="form-control" onChange={this.handleInputChange} type="text" name="country" />
                    </div>
                    <button className="btn btn-success" onClick={this.addUser}>Enregistrer</button>
                </div>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addUser }, dispatch);
}
function mapStateToProps(state) {
    return {
        user: state.users
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserAdd);