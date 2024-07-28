import React from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
      <header>
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand href="/">Ecommerce Shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to='/cart'>
            <Nav.Link><i class="fa-solid fa-cart-shopping"></i><span className="p-2">Cart</span></Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
            <Nav.Link><i class="fa-solid fa-user"></i><span className="p-2">Login</span></Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </header>
    
  )
}

export default Header