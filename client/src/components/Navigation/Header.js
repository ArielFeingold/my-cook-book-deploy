import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse } from 'mdbreact';
import AuthTabs from './AuthTabs'
import UnAuthTabs from './UnAuthTabs'

class Header extends Component {
  state = {
            collapse: false,
            isWideEnough: false,
        };

onClick = this.onClick.bind(this);


    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <Navbar color="light-blue darken-3" dark expand="md" scrolling>
                <NavbarBrand style={{color: "white", cursor: "default"}} disabled>
                    <strong>My CookBook</strong>
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                  {this.props.isAuth ? <AuthTabs /> : <UnAuthTabs />}
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;
