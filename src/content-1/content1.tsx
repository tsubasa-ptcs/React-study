import React from 'react'
import Toc from '../common/toc'
import Content1Body from './content1Body'

export default function Content1() {
  return (
    <>
      <div className="main-content col-9">
        <Content1Body />
      </div>
      <Toc />
    </>
  )
}
