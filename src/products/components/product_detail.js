import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from './../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import NavigationShow from './../../_components/navigation/navigation_show';

class ProductDetail extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchProduct(id);
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <NavigationShow />
                </div>
                <div className="col-md-8">
                    <Link to="/products"><button className="btn btn-primary">Retour</button></Link>
                    <div>
                        {this.props.product.title}
                    </div>
                </div>
            </div>
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