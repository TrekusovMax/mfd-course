import React from 'react'
import NavBar from '../components/NavBar'
import Routing from '../components/Routing'
import { AuthProvider } from '../context/AuthProvider'
import ErrorBoundary from './../components/ErrorBoundary'

export default function ReactRouterTask() {
  return (
    <div className="container  mx-auto">
      <AuthProvider>
        <NavBar />
        <ErrorBoundary>
          <Routing />
        </ErrorBoundary>
      </AuthProvider>
    </div>
  )
}
