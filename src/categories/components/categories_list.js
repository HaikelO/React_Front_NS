import React, { Component } from 'react';
import CategoriesListItem from './categories_list_item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategories } from './../actions/index';

class CategoriesList extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }
    renderListItem(item) {
        return <CategoriesListItem key={item.title} item={item} />
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-center">#</th>
                            <th className="text-center">Désignation</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.categories.map(this.renderListItem)}
                    </tbody>
                </table>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCategories }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);