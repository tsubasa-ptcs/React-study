import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Footer from './footer'
import Navigation from './navigation'

export default function Body() {
  return (
    <>
      <Navigation />
      <div className='wrapper'>
        <Container fluid className="contents">
          <Outlet />
        </Container>
        <Footer />
      </div>
    </>
  )
}
