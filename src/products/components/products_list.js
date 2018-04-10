import React, { Component } from 'react';
import ProductsListItem from './products_list_item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts } from './../actions/index';
import NavigationShow from './../../_components/navigation/navigation_show';


class ProductsList extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }
    renderListItem(item) {
        return <ProductsListItem key={item._id} item={item} />
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-center">#</th>
                            <th className="text-center">Dénomination</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(this.renderListItem)}
                    </tbody>
                </table>
            </div >
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchProducts }, dispatch);
}
function mapStateTopProps(state) {
    return {
        products: state.products
    }
}
export default connect(mapStateTopProps, mapDispatchToProps)(ProductsList);