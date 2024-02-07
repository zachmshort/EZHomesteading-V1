import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="/images/ezhs-noslogan-barn-light.png" alt="EZHomesteading" width="386" height="59"/>
        </a>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Find Produce" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <Link to="/profile">
        <img src="/images/person-circle.svg"/>
        </Link>
        <Link to="/cart">
        <img src="/images/basket.svg"/>
        </Link>
        <Link to="/co-op-store">
        <img src="/images/shop.svg"/>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
