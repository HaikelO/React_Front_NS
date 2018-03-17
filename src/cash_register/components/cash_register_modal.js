import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeModal } from './../actions/index';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CashRegisterModalList from './cash_register_modal_list';
import CashRegisterModalCategoriesShow from './cash_register_modal_categories_show';
import 'react-tabs/style/react-tabs.css';

class CashRegisterModal extends Component {
    constructor(props) {
        super(props);

        
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    afterOpenModal() {
        // references are now sync'd and can be accessed.

    }

    closeModal() {
        this.props.toto();
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
        
        return (
            <Modal
                isOpen={this.props.modal.isOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div>
                    <CashRegisterModalCategoriesShow />
                </div>
                <div>
                    <CashRegisterModalList index={this.props.modal.index} />
                </div>
                <button onClick={this.closeModal}>close</button>
            </Modal>
        );

    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ toto: closeModal }, dispatch);
}

function mapStateToProps(state) {
    return {
        modal: state.modal
    }
}
Modal.setAppElement('#root');
export default connect(mapStateToProps, mapDispatchToProps)(CashRegisterModal);