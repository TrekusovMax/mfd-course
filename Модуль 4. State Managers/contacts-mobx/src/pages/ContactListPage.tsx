import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { observer } from 'mobx-react-lite'
import { contactsStore } from '../store/contactsStore'
import { groupsStore } from '../store/groupsStore'

export const ContactListPage = observer(() => {
  //получаем список всех контактов
  const contactsState: ContactDto[] = contactsStore.contacts
  const groupContactsState: GroupContactsDto[] = groupsStore.groups

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    if (fv.name) {
      contactsStore.searchByName(fv.name)
    } else {
      contactsStore.setContacts()
    }

    if (fv.groupId) {
      const groupContacts = groupContactsState.find(
        ({ id }) => id === fv.groupId,
      )

      if (groupContacts) {
        contactsStore.searchByGroup(groupContacts)
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
          {contactsState.length ? (
            contactsState.map((contact) => (
              <Col key={contact.id}>
                <ContactCard contact={contact} withLink />
              </Col>
            ))
          ) : (
            <span>No contacts found</span>
          )}
        </Row>
      </Col>
    </Row>
  )
})
