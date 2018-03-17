import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addProductToDB, fetchProductFromDB } from './../actions/index';

class CashResgisterManager extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
            showvalue: []
        };
        this.onChange = this.onChange.bind(this);
        this.submitProduct = this.submitProduct.bind(this);
        this.showDB = this.showDB.bind(this);
    }
    onChange(item) {
        this.setState({ value: item.target.value });
    }
    submitProduct() {
        const value = { title: this.state.value };
        /* this.props.addProductToDB(value); */
        this.props.db.insert(value, function (err, data) {
            console.log(data);
        });
    }
    showDB() {
        /* const value = this.props.fetchProductFromDB(); */
        this.props.db.find({}, function (err, data) {
            console.log(data);
        });
    }
    render() {
        console.log("test", this.props.db);
        return (
            <div className="form-group">
                <label className="">Title :</label>{this.state.value}
                <input type="text" name="title" className="" onChange={this.onChange} />
                <button className="btn btn-primary" onClick={this.submitProduct}>Ajouter</button>
                <button onClick={this.showDB}>Show</button>
                {this.state.showvalue.length}
            </div>
        )
    }
}

function mapToDispatch(dispatch) {
    return bindActionCreators({ addProductToDB, fetchProductFromDB }, dispatch);
}
export default connect(null, mapToDispatch)(CashResgisterManager);