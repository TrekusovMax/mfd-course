import { FC } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ContactDto } from 'src/types/dto/ContactDto'
import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
import { useAppStore } from 'src/redux/hooks'

export const ContactPage: FC = () => {
  //получаем список всех контактов
  const contactsState: ContactDto[] = useAppStore().getState().contacts
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
}

