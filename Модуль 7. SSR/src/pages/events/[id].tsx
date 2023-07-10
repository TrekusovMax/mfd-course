import { EventDetail } from '@/entities/event'
import { trpc } from '@/shared/api'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { ActionButtons } from '@/entities/components/ActionButtons'

export default function Event() {
  const router = useRouter()
  const session = useSession()
  const userId = Number(session.data?.user.id)
  const id = Number(router.query.id)
  const { data, isLoading, refetch } = trpc.event.findUnique.useQuery({
    id,
  })
  let isParticipation = false
  const findUser = data?.participations.find(
    (user) => user.user.id === session.data?.user.id,
  )
  if (findUser) {
    isParticipation = true
  }
  if (isLoading) {
    return 'Loading...'
  }

  if (session.status === 'unauthenticated') {
    return 'Forbidden'
  }

  if (!data) {
    return 'No data'
  }

  return (
    <EventDetail
      {...data}
      action={
        <ActionButtons
          isParticipation={isParticipation}
          eventId={id}
          userId={userId}
          onSuccess={refetch}
        />
      }
    />
  )
}
