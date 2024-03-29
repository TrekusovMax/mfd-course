import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

const PrivateRoute = ({ children }) => {
  const auth = useAuth()
  const location = useLocation()
  if (auth.user === null) {
    return (
      <Navigate
        to="/rick-morty/login"
        state={{ from: location.pathname }}
        replace
      />
    )
  }

  return children
}

export default PrivateRoute
