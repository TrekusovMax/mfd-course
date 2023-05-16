import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { ContactDto } from 'src/types/dto/ContactDto'
import { observer } from 'mobx-react-lite'
import { favoriteStore } from 'src/store/favoriteStore'
import { contactsStore } from 'src/store/contactsStore'

export const FavoritListPage = observer(() => {
  //получаем список всех контактов
  const contactsState: ContactDto[] = contactsStore.contacts
  const favorites = favoriteStore.favorites
  const favoriteContacts: ContactDto[] = favoriteStore.favoriteContacts

  useEffect(() => {
    favoriteStore.setFavoriteContacts(contactsState.filter(({ id }) => favorites.includes(id)))
  }, [favorites, contactsState])

  return (
    <Row xxl={4} className="g-4">
      {favoriteContacts.length ? (
        favoriteContacts.map((contact) => (
          <Col key={contact.id}>
            <ContactCard contact={contact} withLink />
          </Col>
        ))
      ) : (
        <span>No favorite contacts</span>
      )}
    </Row>
  )
})
