import React, { memo, useEffect, useState } from 'react'
import { CommonPageProps } from './types'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { ContactDto } from 'src/types/dto/ContactDto'
import { useAppSelector, useAppStore } from 'src/redux/hooks'

export const FavoritListPage = memo<CommonPageProps>(() => {
  //получаем список всех контактов
  const contactsState: ContactDto[] = useAppStore().getState().contacts
  const favorites = useAppSelector((state) => state.favorites.favorites)
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

