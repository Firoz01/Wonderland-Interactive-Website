import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar className='nav-bg'  sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand className='title-heading' href="/home">WONDERLAND</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className='nav-style' as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className='nav-style' as={Link} to="/about">About</Nav.Link>
                        <Nav.Link className='nav-style' as={Link}  to="/packages">Packages</Nav.Link>
                        <Nav.Link className='nav-style' as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link className='nav-style' as={Link} to="/membership">MemberShip</Nav.Link>
                        {!user.displayName ?
                (
                  <>
                    <NavLink className="nav-style" to="/login">
                      Login
                    </NavLink>
                  </>
                ) : (
                  <>
                     <Nav.Link className='nav-style' as={Link} to="/myorder">my order</Nav.Link>
                     <Nav.Link className='nav-style' as={Link} to="/manageorderall">manage all</Nav.Link>
                     <Nav.Link className='nav-style' as={Link} to="/addpackages">add packages</Nav.Link>
                    <span className="fw-bold d-flex justify-content-center align-items-center user-name text-info">{user.displayName}</span>

                    <div className="d-flex justify-content-center align-items-center">
                      <button className="signOut " onClick={logOut} >Sign Out</button>
                    </div>
                  </>
                )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;