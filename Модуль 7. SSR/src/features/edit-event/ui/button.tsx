import { useRouter } from 'next/router'

type EditEventButtonProps = {
  eventId: number
}

export const EditEventButton = ({ eventId }: EditEventButtonProps) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/events/edit/${eventId}`)
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
