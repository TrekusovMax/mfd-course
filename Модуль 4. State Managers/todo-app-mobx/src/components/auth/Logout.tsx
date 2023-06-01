import { Link } from 'react-router-dom'
import { authStore } from '../../store/authStore'

export const Logout = () => {
  const onLogout = () => {
    authStore.logout()
  }

  return (
    <Link className="logout" to="#" onClick={onLogout}>
      <i className="fa fa-sign-out fa-lg" aria-hidden="true"></i>
    </Link>
  )
}

