import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {CaddyContext} from '../Context';

const Header = (props) => {
  const {count, status, setStatus} = useContext(CaddyContext);

  useEffect(() => {
    if ('value' in sessionStorage) {
      console.log('ok');
      setStatus(true);
    } else {
      console.log(',ot ok');
    }
  }, [sessionStorage]);

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
            <span className="icon">
              {status === true ? (
                <i className="fas fa-thumbs-up"></i>
              ) : (
                <i className="fas fa-thumbs-down"></i>
              )}
            </span>
            <Link to="/cart" className="button is-primary">
              <span>
                {props.caddy} {count > 0 && <span>{count}</span>}
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
