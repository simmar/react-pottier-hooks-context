import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {CaddyContext} from '../Context';

const Header = (props) => {
  const {count} = useContext(CaddyContext);

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
              <span>
                {props.caddy} {count}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {};

export default Header;
