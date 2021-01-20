import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {CaddyContext} from '../Context';

const Layout = (props) => {
  const [user, setUser] = useState([]);
  const {status, setStatus} = useContext(CaddyContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };

  const handleSubmit = () => {
    const dataUserObject = JSON.parse(sessionStorage.getItem('value'));

    if ('value' in sessionStorage && sessionStorage.length > 0) {
      if (
        dataUserObject.email &&
        dataUserObject.email &&
        user.email === 'marais.simon@free.fr'
      ) {
        window.location = 'http://localhost:3000/booklist';
        setStatus(true);
        console.log('status ', status);
      } else {
        setStatus(false);
        console.log('status ', status);
      }
    }
  };
  return (
    <div className="layout">
      <form className="form">
        <h1 className="toto">S'identifier</h1>

        <div className="field">
          <label className="label" htmlFor="email">
            Adresse e-mail
            <input
              type="text"
              className="input"
              id="email"
              placeholder="Enter email"
              value={user.name}
              onChange={handleChange}
              name="email"
              required
            />
            {/* {touched.email && errors.email} */}
          </label>
        </div>

        <div className="error has-margin-bottom-3">
          {!status === true ? (
            <p>Adresse e-mail incorrecte ou non renseignée</p>
          ) : (
            ''
          )}
        </div>

        <div className="form-group columns">
          <p className="bd-notification column is-full" onClick={handleSubmit}>
            Continuer
          </p>
        </div>
      </form>
      <div className="a-divider a-divider-break">
        <h5>Nouveau chez Potter ?</h5>
      </div>
      <div className="columns">
        <div className="column has-text-centered">
          <Link to="/FormRegister" className="button is-primary">
            Nouveau chez Potter?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Layout;
