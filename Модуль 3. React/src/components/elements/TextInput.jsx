import Icon from './Icon'
const TextInput = (props) => {
  const { type, required, name, label, icon, placeholder } = props

  return (
    <div className="inputBlock">
      <div>
        {label} <span>{required ? '*' : ''}</span>
      </div>
      {icon ? (
        <div className="inputWithIcon">
          <Icon />
          <input
            placeholder={placeholder}
            required={required}
            name={name}
            className="input"
            type={type}
          />
        </div>
      ) : (
        <input
          placeholder={placeholder}
          required={required}
          name={name}
          className="input"
          type={type}
        />
      )}
    </div>
  )
}

export default TextInput
