import React, { Component } from 'react';
import UsersListItem from './users_list_item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from './../actions/index';

class UsersShow extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }
    renderListItem(item) {
        return <UsersListItem key={item._id} item={item} />
    }
    render() {

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-center">#</th>
                            <th className="text-center">Nom & Prènom</th>
                            <th className="text-center">Type</th>
                            <th className="text-center">Etat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map(this.renderListItem)}
                    </tbody>
                </table>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchUsers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersShow);