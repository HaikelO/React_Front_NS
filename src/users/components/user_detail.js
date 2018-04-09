import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from './../actions/index';
import { Link } from 'react-router-dom';
import NavigationShow from './../../_components/navigation/navigation_show';

class UserDetail extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchUser(id);
    }
    render() {
        console.log(this.props.user)
        return (
            <div className="row">
                <div className="col-md-4">
                    <NavigationShow />
                </div>
                <div className="col-md-8">
                    <Link to="/users"><button className="btn btn-primary">Retour</button></Link>
                    <div>
                        <label>Nom :</label>  {this.props.user.lastname} <br />
                        <label>Prénom :</label>{this.props.user.name} <br />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}
function mapDispatchtoProps(dispatch) {
    return bindActionCreators({ fetchUser }, dispatch);
}
export default connect(mapStateToProps, mapDispatchtoProps)(UserDetail);