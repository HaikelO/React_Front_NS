import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BillsListItem from './bills_list_item';
import { fetchBills } from './../actions/index';

class BillsList extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {

        this.props.fetchBills();


    }
    renderListItem(item) {
        return <BillsListItem key={item.name} name={item.name} />
    }
    render() {
        if (!this.props.bills) {
            return <div>No Bills !</div>
        }

        const list = this.props.bills;
        console.log("list",list);
        return (
            <div>
                {list.map(this.renderListItem)}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        bills: state.bills
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchBills }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BillsList);