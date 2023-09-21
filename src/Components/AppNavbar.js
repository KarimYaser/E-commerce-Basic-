import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './AppNav.css';
import { useSelector } from 'react-redux';


function AppNavbar() {
    const cart = useSelector(state => state.cart)
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" id='nav'>
                <Container>
                    <Link className='nav-head' to="/home">CartApp</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='nav-head' to="/products">Products</Link>
                            <Link className='nav-head' to="/cart">Cart - {cart.length}</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default AppNavbar;