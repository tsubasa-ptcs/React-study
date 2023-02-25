import React from 'react'
import Toc from '../common/toc'
import Content2Body from './content2Body'

export default function Content2() {
  return(
    <>
      <div className='main-content col-9'>
        <Content2Body />
      </div>
      <Toc />
    </>
  )
}