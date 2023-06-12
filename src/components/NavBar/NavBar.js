import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarWidget from '../CartWidget/CartWidget';
import logo from '../img/logo.jpg';
import './NavBar.css';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to={`/`}><img className="logo" src = {logo} alt = "logo tienda"/></Link>
                <Nav className="me-auto">
                    <NavLink to={`/category/comic`}>Comics</NavLink>
                    <NavLink to={`/category/manga`}>Mangas</NavLink>
                    <NavLink to={`/category/anime`}>Animes</NavLink>
                    <NavLink to={`/category/figura`}>Figuras</NavLink>
                </Nav>
                <CarWidget/>
            </Container>
        </Navbar>
        </>
    );
}

export default ColorSchemesExample; 