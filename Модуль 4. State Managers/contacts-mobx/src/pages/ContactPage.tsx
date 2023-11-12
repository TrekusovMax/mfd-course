import { FC } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ContactDto } from 'src/types/dto/ContactDto'
import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
import { contactsStore } from 'src/store/contactsStore'
import { observer } from 'mobx-react-lite'

export const ContactPage: FC = observer(() => {
  //получаем список всех контактов
  const contactsState: ContactDto[] = contactsStore.contacts
  //получаем ID контакта из адресной строки
  const { contactId } = useParams<{ contactId: string }>()
  //ищем контакт в store и выводим его
  const contact = contactsState.find(({ id }) => id === contactId)

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  )
})
