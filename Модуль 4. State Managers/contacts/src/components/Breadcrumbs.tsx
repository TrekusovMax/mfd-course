import React, { memo } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'src/redux/hooks'
import { ContactDto } from 'src/types/dto/ContactDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

interface BreadcrumbsProps {
  pathNames: string[]
}

export const Breadcrumbs = memo<BreadcrumbsProps>(({ pathNames }) => {
  //получаем список всех контактов
  const contactsState: ContactDto[] = useAppSelector((state) => state.contacts)
  const groupContactsState: GroupContactsDto[] = useAppSelector(
    (state) => state.group,
  )
  if (pathNames.length > 1) {
    if (pathNames[0] === 'contact') {
      const { name } = contactsState.filter(
        (contact) => contact.id === pathNames[1],
      )[0]

      pathNames[1] = name
    }
    if (pathNames[0] === 'groups') {
      const { name } = groupContactsState.filter(
        (contact) => contact.id === pathNames[1],
      )[0]

      pathNames[1] = name
    }
  }

  return (
    <Row>
      <Col className={'mb-4'}>
        <ListGroup horizontal>
          <ListGroup.Item>
            {' '}
            <Link to={'/'}>Home</Link>{' '}
          </ListGroup.Item>
          {pathNames.map((name, index) => {
            const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`

            // Определяем, является ли текущий элемент последним в списке
            const isLast = index === pathNames.length - 1

            return (
              <ListGroup.Item key={routeTo}>
                {isLast ? (
                  <span className={'active'}>{name}</span>
                ) : (
                  <Link to={routeTo} className={'link active'}>
                    {name}
                  </Link>
                )}
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </Col>
    </Row>
  )
})

