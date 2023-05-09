import { memo } from 'react'
import { CommonPageProps } from './types'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { useAppDispatch, useAppSelector, useAppStore } from 'src/redux/hooks'
import { searchByName, getContactsList } from 'src/redux/contact'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { searchByGroup } from 'src/redux/contact'

export const ContactListPage = memo<CommonPageProps>(() => {
  const dispatch = useAppDispatch()
  //получаем список всех контактов
  const contactsState: ContactDto[] = useAppSelector((state) => state.contacts)
  const groupContactsState: GroupContactsDto[] = useAppSelector(
    (state) => state.group,
  )

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    if (fv.name) {
      dispatch(searchByName(fv.name))
    } else {
      dispatch(getContactsList())
    }

    if (fv.groupId) {
      const groupContacts = groupContactsState.find(
        ({ id }) => id === fv.groupId,
      )

      if (groupContacts) {
        dispatch(searchByGroup(groupContacts))
      }
    }
  }

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm
          groupContactsList={groupContactsState}
          initialValues={{}}
          onSubmit={onSubmit}
        />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {contactsState.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
})

