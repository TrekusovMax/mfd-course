import { JoinEventButton } from '@/features/join-event'
import { LeaveEventButton } from '@/features/leave-event'

type ActionButtonsProps = {
  eventId: number
  userId: number
  isParticipation: boolean
  onSuccess?: () => void
}
export const ActionButtons = ({
  eventId,
  userId,
  isParticipation,
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
    </>
  )
}
