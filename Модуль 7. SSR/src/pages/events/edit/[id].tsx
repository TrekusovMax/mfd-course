import { EditEventForm } from '@/features/edit-event'
import { EditEventSchema, trpc } from '@/shared/api'
import { useRouter } from 'next/router'

export default function EditEvent() {
  const router = useRouter()

  const { mutate } = trpc.event.edit.useMutation({
    onSuccess: (data) => {
      //router.push(`/events/${data.id}`)
    },
  })

  const id = Number(router.query.id)
  const { data, isLoading, refetch } = trpc.event.findUnique.useQuery({
    id,
  })

  const handleSubmit = (data: EditEventSchema) => {
    console.log('Edit click')

    //mutate(data)
  }
  if (isLoading) {
    return 'Loading...'
  }

  if (!data) {
    return 'No data'
  }

  return (
    <EditEventForm
      date={data.date}
      description={data.description}
      title={data.title}
      onSubmit={handleSubmit}
    />
  )
}
