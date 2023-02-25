import React from 'react'
import Home from './home'
import Content1 from './content-1/content1'
import Content2 from './content-2/content2'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Body from './common/commonBody'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Body />}>
            <Route path="/React-study/" element={<Home />} />
            <Route path="/React-study/content1" element={<Content1 />} />
            <Route path="/React-study/content2" element={<Content2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
