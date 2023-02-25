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
        <Navbar.Brand href="/React-study/">
          {/* <img src={LOGO} width="30" height="30" alt="React Bootstrap logo" /> */}
          React Study
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/React-study/content1">Reactって？</Nav.Link>
            <Nav.Link href="/React-study/content2">Reactを書いてみる</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
