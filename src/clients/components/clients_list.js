import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ClientsListItem from './clients_list_item';
import { fetchClients } from './../actions/index';

class ClientsList extends Component {
    componentDidMount() {
        this.props.fetchClients();
    }
    renderListItem(item) {
        return <ClientsListItem key={item._id} item={item} />
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-center">#</th>
                            <th className="text-center">Nom</th>
                            <th className="text-center">Type</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.clients.map(this.renderListItem)}
                    </tbody>
                </table>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        clients: state.clients
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchClients }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ClientsList);