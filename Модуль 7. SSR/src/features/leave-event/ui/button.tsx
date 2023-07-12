import { trpc } from '@/shared/api'

type LeaveEventButtonProps = {
  eventId: number
  userId: number
  onSuccess?: () => void
}

export const LeaveEventButton = ({
  eventId,
  userId,
  onSuccess,
}: LeaveEventButtonProps) => {
  const { mutate } = trpc.event.leave.useMutation({ onSuccess })

  const handleClick = () => {
    mutate({ eventId, userId })
  }

  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-red-600 text-white"
      onClick={handleClick}
    >
      Покинуть
    </button>
  )
}
