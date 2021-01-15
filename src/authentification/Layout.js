import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Layout = () => {
  const [user, setUser] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };

  const handleSubmit = () => {
    sessionStorage.setItem('value', JSON.stringify(user));
    // console.log('handleSubmit', user.email);

    if (user.email === 'marais.simon@free.fr') {
      console.log('Youhouuu');
      window.location = 'http://localhost:3000/Booklist';
    }
  };
  return (
    <div className="layout">
      <form className="form">
        <h1 className="toto">S'identifier</h1>

        <div className="field">
          <label className="label" htmlFor="email">
            Adresse e-mail ou Password
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

        <div className="form-group columns is-gapless">
          <p
            className="button is-primary column is-full"
            onClick={handleSubmit}
          >
            Continuer
          </p>
        </div>
      </form>
      <div className="a-divider a-divider-break">
        <h5>Nouveau chez Potter ?</h5>
      </div>
      <Link to="/FormRegister" className="button is-primary">
        <span className="button is-primary">Nouveau chez Potter?</span>
      </Link>
    </div>
  );
};

export default Layout;
