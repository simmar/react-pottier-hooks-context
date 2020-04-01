import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Cart from './components/Cart';
import Header from './components/Header';
import Search from './components/Search';
import Context from './Context';
import BookList from './products/BookList';
import './styles/all.scss';

const App = props => {
  const [search, setSearch] = useState ('');
  const [caddy, setCaddy] = useState ([]);

  const initalValue = {
    books: [],
    search,
    setSearch,
    caddy,
    setCaddy,
  };

  return (
    <Context.Provider value={initalValue}>
      <Router>
        <div className="container">
          <Header />

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
    </Context.Provider>
  );
};
export default App;
