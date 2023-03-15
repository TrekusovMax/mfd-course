import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
const Icon = (props) => {
  const { size } = props

  return (
    <i className="fa">
      <FontAwesomeIcon style={{ color: '#ccc' }} size={size ? size : '1x'} icon={faAt} />
    </i>
  )
}

export default Icon
