import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closePaymentModal } from './../actions/index';
import CashRegisterPaymentList from './cash_register_payment_list';
import CashRegisterPaymentKeyboard from './cash_register_payment_keyboard'
import 'react-tabs/style/react-tabs.css';

class CashRegisterPaymentModal extends Component {
    constructor(props) {
        super(props);


        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    afterOpenModal() {
        // references are now sync'd and can be accessed.

    }
    closeModal() {
        this.props.closePaymentModal();
    }
    render() {
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'
            }
        };
        const { payment } = this.props;

        return (
            <Modal
                isOpen={payment.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <CashRegisterPaymentKeyboard />
                <CashRegisterPaymentList />
                <button onClick={this.closeModal}>close</button>
            </Modal>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ closePaymentModal: closePaymentModal }, dispatch);
}

function mapStateToProps(state) {
    return {
        payment: state.payment
    }
}
Modal.setAppElement('#root');
export default connect(mapStateToProps, mapDispatchToProps)(CashRegisterPaymentModal);