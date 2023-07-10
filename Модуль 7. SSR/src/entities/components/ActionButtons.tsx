import { EditEventButton } from '@/features/edit-event'
import { JoinEventButton } from '@/features/join-event'
import { LeaveEventButton } from '@/features/leave-event'

type ActionButtonsProps = {
  eventId: number
  userId: number
  authorId: number
  isParticipation: boolean
  onSuccess?: () => void
}
export const ActionButtons = ({
  eventId,
  userId,
  isParticipation,
  authorId,
  onSuccess,
}: ActionButtonsProps) => {
  return (
    <>
      {isParticipation ? (
        <LeaveEventButton
          eventId={eventId}
          userId={userId}
          onSuccess={onSuccess}
        />
      ) : (
        <JoinEventButton eventId={eventId} onSuccess={onSuccess} />
      )}
      {userId === authorId && <EditEventButton eventId={eventId} />}
    </>
  )
}
