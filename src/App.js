import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Cart from './components/Cart';
import Header from './components/Header';
import Search from './components/Search';
import CaddyContextProvider from './Context';
import BookList from './products/BookList';
import './styles/all.scss';

const App = (props) => {
  return (
    <div>
      <CaddyContextProvider>
        <Router>
          <div className="container">
            <Header caddy="caddy" />
            <div className="section">
              <Switch>
                <Route path="/" exact>
                  <Search />
                  <BookList />
                </Route>

                <Route path="/cart">
                  <Cart />
                </Route>
              </Switch>
            </div>
          </div>
          {props.children}
        </Router>
      </CaddyContextProvider>
    </div>
  );
};
export default App;
