const RadioInput = (props) => {
  const { required, name, label, value } = props

  return (
    <div className="inputBlock">
      <div>
        {label} <span>{required ? '*' : ''}</span>
      </div>

      <label for={name}>{value}</label>
      <input name={name} id={name} type={'radio'} />
    </div>
  )
}

export default RadioInput
