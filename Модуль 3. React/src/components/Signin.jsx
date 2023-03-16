import TextInput from './elements/TextInput'

import { useState } from 'react'

const Signin = (props) => {
  const { onSubmit } = props
  const [inputs, setInputs] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(inputs)
  }
  const handleChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }
  return (
    <form className="form" onSubmit={handleSubmit} onChange={handleChange}>
      <h2>Sing In</h2>
      <TextInput required type="email" name="login" label="Email" />
      <TextInput required type="password" name="password" label="Password" />
      <button className="btn">Login</button>
    </form>
  )
}

export default Signin
