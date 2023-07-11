import { trpc } from '@/shared/api'
import { useRouter } from 'next/router'

type EditEventButtonProps = {
  eventId: number
  onSuccess?: () => void
}

export const EditEventButton = ({ eventId, onSuccess }: EditEventButtonProps) => {
  //const { mutate } = trpc.event.join.useMutation({ onSuccess })
  const router = useRouter()
  const handleClick = () => {
    //mutate({ id: eventId })
    router.push(`/events/edit/${eventId}`)
  }

  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-green-600 text-white mx-4"
      onClick={handleClick}>
      Редактировать
    </button>
  )
}
