import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import logo from './logo.svg';
import './App.css';

import BillsShow from './billing/components/bills_show';
import BillAdd from './billing/components/bill_add';

import UsersShow from './users/components/users_show';
import UserAdd from './users/components/user_add';
import ProfilShow from './_components/profil/profil_show';
import CashRegisterShow from './cash_register/components/cash_register_show';

import ProductsShow from './products/components/products_show';
import ProductAdd from './products/components/product_add';
import ProductDetail from './products/components/product_detail';

import CategoriesShow from './categories/components/categories_show';
import CategorieAdd from './categories/components/categorie_add';

import ClientsShow from './clients/components/clients_show';
import ClientAdd from './clients/components/client_add';

import RepairsShow from './repairs/components/repairs_show';
import RepairAdd from './repairs/components/repair_add';
import RepairDetail from './repairs/components/repair_detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Nutshell</h1>
        </header>
        <BrowserRouter>
          <Switch>
            <Route path="/bill/Add" component={BillAdd} />
            <Route path="/bills" component={BillsShow} />

            <Route path="/categorie/add" component={CategorieAdd} />
            <Route path="/categories" component={CategoriesShow} />

            <Route path="/products" component={ProductsShow} />
            <Route path="/product/add" component={ProductAdd} />
            <Route path="/product/detail/:id" component={ProductDetail} />

            <Route path="/user/add" component={UserAdd} />
            <Route path="/users" component={UsersShow} />

            <Route path="/client/add" component={ClientAdd} />
            <Route path="/clients" component={ClientsShow} />
            <Route path="/profil" component={ProfilShow} />

            <Route path="/repairs" component={RepairsShow} />
            <Route path="/repair/add" component={RepairAdd} />
            <Route path="/repair/detail/:id" component={RepairDetail} />
            <Route path="/" component={CashRegisterShow} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
