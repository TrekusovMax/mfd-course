import Icon from './Icon'
const TextInput = (props) => {
  const { type, required, name, label, icon, placeholder, error } = props
  return (
    <div className="inputBlock">
      <div>
        {label} <span>{required ? '*' : ''}</span>
      </div>
      {icon ? (
        <div className="inputWithIcon">
          <Icon size={'2xs'} />
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
          className={`input ${error ? 'error' : ''}`}
          type={type}
        />
      )}
    </div>
  )
}

export default TextInput
