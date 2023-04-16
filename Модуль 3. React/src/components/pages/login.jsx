import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'
import TextInput from '../elements/TextInput'

const Login = () => {
  const auth = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from || '/'

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const login = formData.get('login')
    auth.signIn(login, () => {
      navigate(from, {
        replace: true,
      })
    })
  }

  return (
    <div className="Login">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold">Вход </h2>
        <TextInput required type="text" name="login" label="Login" />
        <TextInput required type="password" name="password" label="Password" />
        <button className="btn">Войти</button>
      </form>
    </div>
  )
}

export default Login
