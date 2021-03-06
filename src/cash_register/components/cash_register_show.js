import React, { Component } from 'react';
import NavigationShow from './../../_components/navigation/navigation_show';
import CashRegisterProductsShow from './cash_register_products_show';
import CashRegisterProductsCategoriesShow from './cash_register_products_categories_show';
import CashRegisterCartShow from './cash_register_cart_show';
import CashRegisterModal from './cash_register_modal';
import CashResgisterManager from './cash_register_manager';
import CashRegisterPaymentShow from './cash_register_payment_show';
import Datastore from 'nedb';
var db = new Datastore({ filename: 'data/datafile.json', autoload: true });


class CashRegisterShow extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <NavigationShow />
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-12 center-text">

                        </div>
                        <div className="col-md-8">

                            <CashRegisterProductsShow />
                            <CashRegisterProductsCategoriesShow />
                        </div>
                        <div className="col-md-4">
                            <CashRegisterCartShow />
                            <CashRegisterPaymentShow />
                        </div>
                        <div className="col-md-12">
                            <CashResgisterManager db={db} />
                        </div>
                    </div>
                </div>
                <CashRegisterModal />
            </div>
        );
    }
}

export default CashRegisterShow;