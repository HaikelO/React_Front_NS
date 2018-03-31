import React, { Component } from 'react';
import CashRegisterPaymentModal from './cash_register_payment_modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openPaymentModal } from './../actions/index';

class CashRegisterPaymentShow extends Component {
    constructor(props){
        super(props);

        this.showPaymentModal = this.showPaymentModal.bind(this);
    }
    showPaymentModal() {
        this.props.openPaymentModal();
        console.log("button show modal");
    }
    render() {
        return (
            <div>
                <button onClick={this.showPaymentModal}>Encaissement</button>
                <CashRegisterPaymentModal />
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ openPaymentModal: openPaymentModal }, dispatch);
}
export default connect(null, mapDispatchToProps)(CashRegisterPaymentShow);