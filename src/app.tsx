import React from 'react'
import Home from './home'
import Content1 from './content-1/content1'
import Content2 from './content-2/content2'
import Error from './error'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Body from './common/commonBody'

export default function App() {
  return (
    <>
      <BrowserRouter basename="React-study">
        <Routes>
          <Route element={<Body />}>
            <Route path="/" element={<Home />} />
            <Route path="/content1" element={<Content1 />} />
            <Route path="/content2" element={<Content2 />} />
            <Route path='/*' element={<Error />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
