import React from 'react'
import NavBar from '../components/NavBar'
import Routing from '../components/Routing'
import { AuthProvider } from '../context/AuthProvider'
import ErrorBoundary from './../components/ErrorBoundary'
import '../components/Components.css'

export default function ReactRouterTask() {
  return (
    <div className="container min-h-screen text-black bg-white  mt-[100px] mx-auto">
      <AuthProvider>
        <NavBar />
        <ErrorBoundary>
          <Routing />
        </ErrorBoundary>
      </AuthProvider>
    </div>
  )
}
