import React, {useState} from 'react';
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

  // console.log (caddy, 'caddy');

  return (
    <Context.Provider value={initalValue}>
      <div className="container">
        <div className="section">
          <Header />
          <Search />
          <BookList />
          <Cart />
        </div>
      </div>
      {props.children}
    </Context.Provider>
  );
};
export default App;
