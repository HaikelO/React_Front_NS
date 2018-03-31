import React, { Component } from 'react';

class CategorieDetail extends Component {
    render() {
        return (
            <div>
                <label>Title : </label>{this.props.title}
            </div>
        );
    }
}