import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

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
        <Navbar.Brand as={NavLink} to="/">
          {/* <img src={LOGO} width="30" height="30" alt="React Bootstrap logo" /> */}
          React Study
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/content1">Reactって？</Nav.Link>
            <Nav.Link as={NavLink} to="/content2">Reactを書いてみる</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
