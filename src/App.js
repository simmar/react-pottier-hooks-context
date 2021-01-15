import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FormRegister from './authentification/FormRegister';
import Layout from './authentification/Layout';
import Cart from './components/Cart';
import Header from './components/Header';
import Search from './components/Search';
import CaddyContextProvider from './Context';
import BookList from './products/BookList';
import './styles/all.scss';

const nameValidation = (fieldName, fieldValue) => {
  if (fieldValue.trim() === '') {
    return `${fieldName} is required`;
  }
  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return 'Invalid characters';
  }
  if (fieldValue.trim().length < 3) {
    return `${fieldName} needs to be at least three characters`;
  }
  return null;
};

const emailValidation = (email) => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return null;
  }
  if (email.trim() === '') {
    return 'Email is required';
  }
  return 'Please enter a valid email';
};

const passwordValidation = (password) => {
  if (!password === 'Boulogne') {
    return 'Password OK';
  }
  return null;
};

const validate = {
  firstName: (name) => nameValidation('First Name', name),
  lastName: (name) => nameValidation('Last Name', name),
  email: emailValidation,
  // age: ageValidation,
  password: passwordValidation,
};

const initialValues = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
};
const App = (props) => {
  return (
    <div>
      <CaddyContextProvider>
        <Router>
          <div className="container">
            <Header caddy="caddy" />
            <div className="section">
              <Switch>
                <Route exact path="/">
                  <Layout />
                </Route>
                <Route path="/booklist">
                  <Search />
                  <BookList />
                </Route>

                <Route path="/cart">
                  <Cart />
                </Route>
                <Route>
                  <FormRegister
                    path="/FormRegister"
                    validate={validate}
                    initialValues={initialValues}
                  />
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
