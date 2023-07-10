import { trpc } from '@/shared/api'

type EditEventButtonProps = {
  eventId: number
  onSuccess?: () => void
}

export const EditEventButton = ({
  eventId,
  onSuccess,
}: EditEventButtonProps) => {
  //const { mutate } = trpc.event.join.useMutation({ onSuccess })

  const handleClick = () => {
    //mutate({ id: eventId })
    console.log('Edit button click')
  }

  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-green-600 text-white mx-4"
      onClick={handleClick}
    >
      Редактировать
    </button>
  )
}

