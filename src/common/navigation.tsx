import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default function Navigation() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="col-12"
      >
        <Navbar.Brand href="*">
          {/* <img src={LOGO} width="30" height="30" alt="React Bootstrap logo" /> */}
          React Study
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="*">Reactって？</Nav.Link>
            <Nav.Link href="*">Reactを書いてみる</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
