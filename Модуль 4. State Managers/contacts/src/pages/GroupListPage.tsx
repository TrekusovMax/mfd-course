import { memo } from 'react'
import { CommonPageProps } from './types'
import { Col, Row } from 'react-bootstrap'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { useAppSelector } from 'src/redux/hooks'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

export const GroupListPage = memo<CommonPageProps>(() => {
  const groupContactsState: GroupContactsDto[] = useAppSelector(
    (state) => state.group,
  )
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

