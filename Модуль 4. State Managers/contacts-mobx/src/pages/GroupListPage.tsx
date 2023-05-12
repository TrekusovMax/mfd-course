import { memo } from 'react'
import { CommonPageProps } from './types'
import { Col, Row } from 'react-bootstrap'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { groupsStore } from 'src/store/groupsStore'

export const GroupListPage = memo<CommonPageProps>(() => {
  const groupContactsState: GroupContactsDto[] = groupsStore.groups
  return (
    <Row xxl={4}>
      {groupContactsState.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  )
})
