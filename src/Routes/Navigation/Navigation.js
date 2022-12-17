import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom'
import { useState } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { signOut } from 'firebase/auth';

function Navigation() {
    const [usuario, setUsuario] = useState(null);

    onAuthStateChanged(auth, (user) => {
        if (user) {
        setUsuario(user);
        } else {
        setUsuario(null);
        }
    })

  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant='dark' bg='dark'>
      <Navbar.Brand as={NavLink} to='/' className='ms-3'>
        Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='me-auto'>
          <Nav.Link as={NavLink} to='/menu'>
            Menu
          </Nav.Link>
          <Nav.Link as={NavLink} to='/Delivery'>Delivery</Nav.Link>
          <NavDropdown title='Admin'>
            <NavDropdown.Item as={NavLink} to='/pedidos'>Pedidos</NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
        <Nav>
            {usuario ? 
                <NavDropdown title={usuario.email}>
                    <NavDropdown.Item as={NavLink} to='/profile'>perfil</NavDropdown.Item> 
                </NavDropdown>
                : 
                <Nav.Link as={NavLink} to='/login'>Iniciar Sesion</Nav.Link>
            }
            {usuario ? 
                <Link to='/'><button className="btn btn-primary me-3" onClick={() => signOut(auth)}>Cerrar Sesion</button></Link> 
                : 
                <Nav.Link as={NavLink} to='/Register'>Registrarse</Nav.Link>
            }
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
    </>
    
  )
}

export default Navigation;