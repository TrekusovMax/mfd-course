import { memo } from 'react'
import { ContactDto } from 'src/types/dto/ContactDto'
import { Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { toggleFavorite } from 'src/redux/favorites'

interface ContactCardProps {
  contact: ContactDto
  withLink?: boolean
}

export const ContactCard = memo<ContactCardProps>(
  ({ contact: { photo, id, name, phone, birthday, address }, withLink }) => {
    const dispatch = useAppDispatch()
    const isContactFavorite = useAppSelector((state) =>
      state.favorites.favorites.includes(id),
    )

    const handleToggleFavorite = () => {
      dispatch(toggleFavorite(id))
    }

    return (
      <Card key={id}>
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Title>
            {withLink ? <Link to={`/contact/${id}`}>{name}</Link> : name}{' '}
            <img
              src={isContactFavorite ? '/star-fill.svg' : '/star.svg'}
              onClick={handleToggleFavorite}
              alt="favorite icon"
              style={{ cursor: 'pointer' }}
            />
          </Card.Title>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item>
                <Link to={`tel:${phone}`} target="_self">
                  {phone}
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>{birthday}</ListGroup.Item>
              <ListGroup.Item>{address}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card.Body>
      </Card>
    )
  },
)

