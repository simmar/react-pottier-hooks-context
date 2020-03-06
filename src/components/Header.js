import React from 'react';

const Header = () => {
  return (
    <header>
      <nav
        className="navbar is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item">
            HARRY POTTIER
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="button is-primary">
              Caddy
            </div>
          </div>
        </div>

      </nav>
    </header>
  );
};

Header.propTypes = {};

export default Header;
