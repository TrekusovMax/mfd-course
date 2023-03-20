import React from 'react'


import { Routes, Route, Link } from 'react-router-dom'
import Signin from '../components/Signin'
import Signup from './../components/Signup'
import '../components/Components.css'
import Task3 from './task3'
import Task1 from './task1'
import Task2 from './task2'
import Task4 from './task4'
import Task5 from './task5'

const ReactTasks = () => {
  const handleSubmit = (props) => {
    alert(JSON.stringify(props))
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

      <div>
      <h3>Дополнительное Задание 1</h3>
      <Task5 />      
       <h3>Задание 4</h3>
        <Task4 />
        <h3>Задание 3</h3>
        <Task3 />
        <h3>Задание 2</h3>
        <Task2 />
        <h3>Задание 1</h3>
        <Task1 />       
      </div>

    </>
  )
}
export default ReactTasks
