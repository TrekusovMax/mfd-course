import TextInput from './elements/TextInput'
import './Components.css'
import { useState } from 'react'
import Icon from './elements/Icon'
import RadioInput from './elements/RadioInput'

const Signup = (props) => {
  const { onSubmit } = props
  const [inputs, setInputs] = useState({
    login: '',
    password: '',
  })
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
      <h2>Sing Up</h2>
      <TextInput required type="text" name="name" label="Name" placeholder="Name" />
      <TextInput
        required
        type="text"
        name="nikname"
        label="Nikname"
        icon={<Icon />}
        placeholder="Nikname"
      />
      <TextInput required type="email" name="login" label="Email" placeholder="Email" />
      <RadioInput required name="sex" label="Sex" value={['Male', 'Female']} />

      <TextInput required type="password" name="password" label="Password" placeholder="Password" />
      <TextInput
        required
        type="password"
        name="confirmPassword"
        label="Confirm password"
        placeholder="Confirm password"
      />
      <button className="btn">Войти</button>
    </form>
  )
}

export default Signup
