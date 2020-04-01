import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav
        className="navbar is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            HARRY POTTIER
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <Link to="/cart" className="button is-primary">
              Caddy
            </Link>
          </div>
        </div>

      </nav>
    </header>
  );
};

Header.propTypes = {};

export default Header;
