import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRepair } from './../actions/index';
import { Link } from 'react-router-dom';
import NavigationShow from './../../_components/navigation/navigation_show';

class RepairDetail extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchRepair(id);
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <NavigationShow />
                </div>
                <div className="col-md-8">
                    <Link to="/repairs"><button className="btn btn-primary">Retour</button></Link>
                    <div>
                        <label>Title :</label>  {this.props.repair.title} <br />
                        <label>Type :</label>{this.props.repair.type} <br />
                        <label>Client :</label>{this.props.repair.client} <br />
                        <label>Etat :</label>{this.props.repair.etat} <br />
                        <label>Description :</label>{this.props.repair.description}<br />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        repair: state.repair
    }
}
function mapDispatchtoProps(dispatch) {
    return bindActionCreators({ fetchRepair }, dispatch);
}
export default connect(mapStateToProps, mapDispatchtoProps)(RepairDetail);