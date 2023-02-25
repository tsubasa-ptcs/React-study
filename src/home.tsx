import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="main-content col-12">
      <h2>目次</h2>
      <Link to="/content1">1.Reactって？</Link><br />
      <Link to="/content2">2.Reactを書いてみる</Link>
    </div>
  )
}
