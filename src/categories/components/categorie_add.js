import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavigationShow from './../../_components/navigation/navigation_show';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCategorie } from './../actions/index';

class CategorieAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.addCategorie = this.addCategorie.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    addCategorie() {
        this.props.addCategorie(this.state, (result) => {
            this.props.history.push('/categories');
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <NavigationShow />
                </div>
                <div className="col-md-8">
                    <Link to="/categories"><button className="btn btn-primary">Retour</button></Link> <br />
                    <label id="title">Title:</label>
                    <input type="text" name="title" id="title" onChange={this.handleInputChange} />
                    <button className="btn btn-success" onClick={this.addCategorie}>Enregistrer</button>
                </div>

            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addCategorie }, dispatch);
}
export default connect(null, mapDispatchToProps)(CategorieAdd);