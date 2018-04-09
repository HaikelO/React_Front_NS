import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchClient } from './../actions/index';
import NavigationShow from './../../_components/navigation/navigation_show';
import { Link } from 'react-router-dom';

class ClientDetail extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchClient(id);
    }
    render() {
        const { lastname, name, adress, zip, country, email, phone, type } = this.props.client;
        return (
            <div className="row">
                <div className="col-md-4">
                    <NavigationShow />
                </div>
                <div className="col-md-8">
                    <Link to="/clients"><button className="btn btn-primary">Retour</button></Link>
                    <div>
                        <label>Nom :</label>{lastname} <br />
                        <label>Prenom :</label>{name} <br />
                        <label>Adresse:</label>{adress} <br />
                        <label>Code Postal :</label>{zip} <br />
                        <label>Pays :</label>{country} <br />
                        <label>Mail :</label>{email} <br />
                        <label>Téléphone :</label>{phone} <br />
                        <label>Type :</label>{type} <br />
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        client: state.client
    }
}
function mapsDispatchToProps(dispatch) {
    return bindActionCreators({ fetchClient }, dispatch);
}
export default connect(mapStateToProps, mapsDispatchToProps)(ClientDetail);