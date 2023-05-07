import React, { memo, useEffect, useState } from 'react'
import { CommonPageProps } from './types'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { ContactDto } from 'src/types/dto/ContactDto'
import { useAppStore } from 'src/redux/hooks'

export const FavoritListPage = memo<CommonPageProps>(
  ({ favoriteContactsState }) => {
    //получаем список всех контактов
    const contactsState: ContactDto[] = useAppStore().getState().contacts
    const [contacts, setContacts] = useState<ContactDto[]>([])
    useEffect(() => {
      setContacts(() =>
        contactsState.filter(({ id }) => favoriteContactsState[0].includes(id)),
      )
    }, [contactsState, favoriteContactsState])
    return (
      <Row xxl={4} className="g-4">
        {contacts.map((contact) => (
          <Col key={contact.id}>
            <ContactCard contact={contact} withLink />
          </Col>
        ))}
      </Row>
    )
  },
)

