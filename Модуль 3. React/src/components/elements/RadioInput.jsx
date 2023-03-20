const RadioInput = (props) => {
  const { required, name, label, value } = props

  return (
    <div className="radioBlock">
      <div>
        {label} <span>{required ? '*' : ''}</span>
      </div>
      <div className="radio">
        {value &&
          value.map((v) => (
            <div key={v}>
              <label htmlFor={v}>{v}</label>
              <input
                value={v}
                required={required}
                name={name}
                id={v}
                type={'radio'}
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default RadioInput
