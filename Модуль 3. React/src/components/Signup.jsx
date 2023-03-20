import { useState } from 'react'
import Icon from './elements/Icon'
import RadioInput from './elements/RadioInput'
import TextInput from './elements/TextInput'

const Signup = (props) => {
  const { onSubmit } = props
  const [error, setError] = useState(false)

  const [inputs, setInputs] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputs.password !== inputs.confirmPassword) {
      alert('Error! Password and confirm password must be same!')
      setError(true)
    } else {
      setError(false)
      onSubmit(inputs)
    }
  }
  const handleChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
    setError(false)
  }
  return (
    <form className="form" onSubmit={handleSubmit} onChange={handleChange}>
      <h2>Sing Up</h2>
      <TextInput
        required
        type="text"
        name="name"
        label="Name"
        placeholder="Name"
      />
      <TextInput
        required
        type="text"
        name="nikname"
        label="Nikname"
        icon={<Icon />}
        placeholder="Nikname"
      />
      <TextInput
        required
        type="email"
        name="login"
        label="Email"
        placeholder="Email"
      />
      <RadioInput required name="sex" label="Sex" value={['Male', 'Female']} />

      <TextInput
        error={error}
        required
        type="password"
        name="password"
        label="Password"
        placeholder="Password"
      />
      <TextInput
        error={error}
        required
        type="password"
        name="confirmPassword"
        label="Confirm password"
        placeholder="Confirm password"
      />
      <button type="submit" className="btn">
        Register
      </button>
    </form>
  )
}

export default Signup
