import React from 'react'
import Home from './home'
import Content1 from './content-1/content1'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Body from './common/commonBody'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Body />}>
            <Route path='/' element={<Home />} />
            <Route path="/content1" element={<Content1 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
