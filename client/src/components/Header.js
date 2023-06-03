import React, { useEffect, useState } from 'react';
import {
    Container, Row, Col, Form, Input, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, Carousel
} from 'reactstrap';

const Header = () => {        
    return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Aries Garden</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search in our Garden" aria-label="Search" name="homeSearch"/>
            <button className="btn btn-primary" type="submit" formMethod="post"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/account"><i className="fa-solid fa-user"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart"><i class="fa-solid fa-cart-shopping"></i></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    ); 
}

export default Header;