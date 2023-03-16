import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Signin from '../components/Signin'
import Signup from './../components/Signup'
import '../components/Components.css'

const ReactTasks = () => {
  const handleSubmit = (props) => {
    console.log(props)
  }

  return (
    <>
      <header className="navBar">
        <nav>
          <ul>
            <li>
              <Link to="/">Sign in</Link>
            </li>
            <li>
              <Link to="/register">Sign up</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Signin onSubmit={handleSubmit} />} />
        <Route path="/register" element={<Signup onSubmit={handleSubmit} />} />
      </Routes>
    </>
  )
}

export default ReactTasks
