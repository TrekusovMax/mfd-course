import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthStatus from './AuthStatus'

const NavBar = () => {
  return (
    <nav
      id="navbar"
      className="bg-gray-400  border-gray-200 px-1  py-1 rounded"
    >
      <div className="container  mx-auto">
        <ul className="text-xl flex flex-wrap items-center justify-around  flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0  md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <NavLink
              to="/"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              aria-current="page"
            >
              Главная страница
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/heroes"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Герои
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/location"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Локации
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/episode"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Эпизоды
            </NavLink>
          </li>
          <li>
            <AuthStatus />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
