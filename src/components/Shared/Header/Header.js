import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/globetech logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className='mt-4'>
            <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img className='logo' src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='ms-auto'>
                    <NavLink className='menu-item' to='/'>Home</NavLink>
                    <NavLink className='menu-item' to='/Services'>Services</NavLink>
                    <NavLink className='menu-item' to='/login'>Login</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
  );
}
export default Header;