import React, { memo, useState } from 'react'
import { CommonPageProps } from './types'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { useAppDispatch, useAppSelector, useAppStore } from 'src/redux/hooks'
import { findByName, getState } from 'src/redux/contact'

export const ContactListPage = memo<CommonPageProps>(
  ({ groupContactsState }) => {
    const dispatch = useAppDispatch()
    //получаем список всех контактов
    //  const contactsState2: ContactDto[] = useAppStore().getState().contacts
    const contactsState: ContactDto[] = useAppSelector(
      (state) => state.contacts,
    )

    const onSubmit = (fv: Partial<FilterFormValues>) => {
      let findContacts: ContactDto[] = contactsState

      if (fv.name) {
        dispatch(findByName(fv.name))
      } else {
        dispatch(getState())
      }

      if (fv.groupId) {
        const groupContacts = groupContactsState[0].find(
          ({ id }) => id === fv.groupId,
        )

        if (groupContacts) {
          findContacts = findContacts.filter(({ id }) =>
            groupContacts.contactIds.includes(id),
          )
        }
      }
    }

    //    console.log(contactsState)
    return (
      <Row xxl={1}>
        <Col className="mb-3">
          <FilterForm
            groupContactsList={groupContactsState[0]}
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
  },
)

