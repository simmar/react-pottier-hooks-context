import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Cart from './components/Cart';
import Header from './components/Header';
import Search from './components/Search';
import Context from './Context';
import BookList from './products/BookList';
import './styles/all.scss';

const App = (props) => {
  const [search, setSearch] = useState('');
  const [caddy, setCaddy] = useState([]);
  const [totalPrice, SetTotal] = useState([]);
  const [count, setCount] = useState(0);

  const initialValue = {
    books: [],
    search,
    setSearch,
    caddy,
    setCaddy,
    totalPrice,
    SetTotal,
    count,
    setCount,
  };

  return (
    <Context.Provider value={initialValue}>
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
    </Context.Provider>
  );
};
export default App;
