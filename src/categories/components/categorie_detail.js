import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategorie } from './../actions/index';
import NavigationShow from './../../_components/navigation/navigation_show';
import { Link } from 'react-router-dom';

class CategorieDetail extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchCategorie(id);
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <NavigationShow />
                </div>
                <div className="col-md-8">
                    <Link to="/categories"> <button className="btn btn-primary">Retour</button></Link>
                    <div>
                        <label>Title : </label>{this.props.categorie.title}
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        categorie: state.categorie
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCategorie }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CategorieDetail);