import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from './../actions/index';
import { bindActionCreators } from 'redux';

class ProductDetail extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchProduct(id);
    }
    render() {
        return (
            <div>{this.props.product.title}</div>
        );
    }
}
function mapStateToProps(state) {
    return {
        product: state.product
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchProduct }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);