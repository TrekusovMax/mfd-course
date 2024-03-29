import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

const AuthStatus = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  const handleSignOut = () => {
    auth.signOut(() => {
      navigate('/')
    })
  }
  if (auth.user === null) {
    return (
      <NavLink
        to="/login"
        className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >
        Войти
      </NavLink>
    )
  }

  return (
    <>
      Привет, {auth.user}!
      <p>
        <Link className="font-bold " onClick={handleSignOut}>
          Выйти
        </Link>
      </p>
    </>
  )
}

export default AuthStatus
