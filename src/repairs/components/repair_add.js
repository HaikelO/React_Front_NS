import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavigationShow from './../../_components/navigation/navigation_show';
import { addRepair } from './../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class RepairAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            client: "",
            type: "",
            description: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addRepair = this.addRepair.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    addRepair() {
        this.props.addRepair(this.state, (result) => {
            this.props.history.push('/repairs');
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <NavigationShow />
                </div>
                <div className="col-md-8">
                    <Link to="/repairs"><button className="btn btn-primary">Retour</button></Link>
                    <div className="form-group">
                        <label>Title :</label>
                        <input className="form-control" type="text" name="title" onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Client :</label>
                        <select className="form-control" name="client" onChange={this.handleInputChange} >
                            <option value="Client A">Client A</option>
                            <option value="Client B">Client B</option>
                            <option value="Client C">Client C</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Type :</label>
                        <select className="form-control" name="type" onChange={this.handleInputChange} >
                            <option value="Type A">Type A</option>
                            <option value="Type B">Type B</option>
                            <option value="Type C">Type C</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Etat :</label>
                        <select className="form-control" name="etat" onChange={this.handleInputChange} >
                            <option value="false">En cours de traitement</option>
                            <option value="true">Traité</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description :</label>
                        <textarea className="form-control" name="description" onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Référence :</label>
                        <input className="form-control" type="text" name="ref" onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Référence Produit :</label>
                        <input className="form-control" type="text" name="ref" onChange={this.handleInputChange} />
                    </div>
                    <button className="from-control btn btn-success" onClick={this.addRepair}>Enregistrer</button>
                </div>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addRepair }, dispatch);
}
export default connect(null, mapDispatchToProps)(RepairAdd);