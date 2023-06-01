import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import ReactRouterTask from './react-router-task'

import Task1 from './task1'
import Task2 from './task2'
import Task3 from './task3'
import Task4 from './task4'
import Task5 from './task5'
import Task6 from './task6'
//import Signin from './../components/Signin'
//import Signup from './../components/Signup'

const ReactTasks = () => {
  const handleSubmit = (props) => {
    alert(JSON.stringify(props))
  }
  return (
    <>
      <header className="navBar">
        <nav style={{ position: 'relative' }}>
          <ul>
            <li>
              <Link to="/task1">task 1</Link>
            </li>
            <li>
              <Link to="/task2">task 2</Link>
            </li>
            <li>
              <Link to="/task3">task 3</Link>
            </li>
            <li>
              <Link to="/task4">task 4</Link>
            </li>
            <li>
              <Link to="/task5">task 5</Link>
            </li>
            <li>
              <Link to="/task6">task 6</Link>
            </li>
            <li>
              <Link to="/">Sign in</Link>
            </li>
            <li>
              <Link to="/register">Sign up</Link>
            </li>
            <li>
              <Link to="/rick-morty">Rick and Morty</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
        <Route path="/task5" element={<Task5 />} />
        <Route path="/task6" element={<Task6 />} />
        {/* <Route path="/" element={<Signin onSubmit={handleSubmit} />} /> */}
        {/*   <Route path="/register" element={<Signup onSubmit={handleSubmit} />} /> */}
        <Route path="/rick-morty/*" element={<ReactRouterTask />} />
      </Routes>
    </>
  )
}
export default ReactTasks
