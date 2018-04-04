import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ClientsListItem from './clients_list_item';
import { fetchClients } from './../actions/index';

class ClientsList extends Component {
    componentDidMount(){
        this.props.fetchClients();
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchClients }, dispatch);
}
export default connect(null,mapDispatchToProps)(ClientsList);