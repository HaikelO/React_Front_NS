import React, { Component } from 'react';
import NavigationShow from './../../_components/navigation/navigation_show';
import BillList from './bills_list';

class BillsShow extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <NavigationShow  />
                </div>
                <div className="col-md-9">
                    <BillList />
                </div>
            </div>
        )
    }
}

export default BillsShow;