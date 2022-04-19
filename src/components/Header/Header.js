import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Logo from '../img/wildlifelogo-black-300.png'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar sticky="top" className='text-white' collapseOnSelect expand="lg" bg="primary bg-opacity-20" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img src={Logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='fs-4 text-dark' href="/home#services">Services</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='fs-4 text-dark' as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link className='fs-4 text-dark' as={Link} to="/about">About</Nav.Link>
                        {!user ? <Nav.Link className='fs-4 text-dark' as={Link} to="/login">Login</Nav.Link> : <Nav.Link onClick={handleSignOut} className='my-auto text-dark fs-4 d-inline text-white text-opacity-50'>Log Out</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Header;