import React from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
function Header() {
  return (
      <header>
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Ecommerce Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/cart"><i class="fa-solid fa-cart-shopping"></i><span className="p-2">Cart</span></Nav.Link>
            <Nav.Link href="/login"><i class="fa-solid fa-user"></i><span className="p-2">Login</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </header>
    
  )
}

export default Header