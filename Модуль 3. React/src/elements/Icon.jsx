import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
const Icon = (props) => {
  const { size } = props

  return (
    <FontAwesomeIcon
      style={{ color: '#999' }}
      size={size ? size : '1x'}
      icon={faAt}
    />
  )
}

export default Icon
