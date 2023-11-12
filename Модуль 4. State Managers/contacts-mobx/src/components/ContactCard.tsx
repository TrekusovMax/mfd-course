import { ContactDto } from 'src/types/dto/ContactDto'
import { Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { favoriteStore } from 'src/store/favoriteStore'
import { observer } from 'mobx-react-lite'

interface ContactCardProps {
  contact: ContactDto
  withLink?: boolean
}

export const ContactCard = observer(
  ({
    contact: { photo, id, name, phone, birthday, address },
    withLink,
  }: ContactCardProps) => {
    const isContactFavorite = favoriteStore.isContactFavorite(id)

    const handleToggleFavorite = () => {
      favoriteStore.toggleFavorite(id)
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
