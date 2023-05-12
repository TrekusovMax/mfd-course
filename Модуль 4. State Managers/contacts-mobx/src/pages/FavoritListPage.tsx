import { useEffect, useState } from 'react'
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
  const [contacts, setContacts] = useState<ContactDto[]>([])

  useEffect(() => {
    setContacts(() => contactsState.filter(({ id }) => favorites.includes(id)))
  }, [favorites, contactsState])

  return (
    <Row xxl={4} className="g-4">
      {contacts.length ? (
        contacts.map((contact) => (
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
