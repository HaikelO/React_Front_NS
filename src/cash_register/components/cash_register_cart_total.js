import React, { Component } from 'react';
import { connect } from 'react-redux';

class CashRegisterCartTotal extends Component {
        render() {
            return (
                <div>Total: {this.props.total}</div>
            );
        }
    }
function mapStateToProps(state){
    return {
        total : state.total
    }
}
export default connect(mapStateToProps)(CashRegisterCartTotal);