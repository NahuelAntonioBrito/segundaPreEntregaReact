import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarWidget from '../CartWidget/CartWidget';
import logo from '../img/logo.jpg';
import './NavBar.css';
import { Link,NavLink } from 'react-router-dom';



function ColorSchemesExample() {
    return (
        <>
            <Navbar className='containerMenu' bg="dark" variant="dark">
                <Container className='menuContainer'>
                    <Link to={`/`}><img className="logo" src = {logo} alt = "logo tienda"/></Link>
                    <Nav className="me-auto">
                        <NavLink className="menu"  to={`/category/Comics`}>Comics</NavLink>
                        <NavLink className="menu" to={`/category/Mangas`}>Mangas</NavLink>
                        <NavLink className="menu" to={`/category/Animes`}>Animes</NavLink>
                        <NavLink className="menu" to={`/category/Figuras`}>Figuras</NavLink>
                    </Nav>
                    <CarWidget/>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample; 