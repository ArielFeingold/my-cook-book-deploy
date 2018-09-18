import React from 'react'
import {NavbarNav, NavItem } from 'mdbreact';
import { Link } from 'react-router-dom'

const AuthTabs = () => (
  <React.Fragment>
    <NavbarNav left>
      <NavItem>
          <Link className="nav-link" to="/recipes/new">Add a New Recipe</Link>
      </NavItem>
      <NavItem>
          <Link className="nav-link" to="/recipes/index" disabled>My Recipes</Link>
      </NavItem>

    </NavbarNav>
    <NavbarNav right>
      <NavItem>
        <Link className="nav-link" to="/users/logout">Logout</Link>
      </NavItem>
    </NavbarNav>
  </React.Fragment>
)

export default AuthTabs;
