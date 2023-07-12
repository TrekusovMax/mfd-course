import { EventDetail } from '@/entities/event'
import { trpc } from '@/shared/api'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { ActionButtons } from '@/entities/components/ActionButtons'
import Link from 'next/link'

export default function Event() {
  const router = useRouter()
  const session = useSession()

  if (session.status === 'unauthenticated') {
    return (
      <>
        <span className="underline text-blue-600 font-bold">
          <Link href={'/api/auth/signin'}>Войдите</Link>
        </span>
        , чтобы смотреть подробности события.
      </>
    )
  }

  const userId = Number(session.data?.user.id)
  const id = Number(router.query.id)
  const { data, isLoading, refetch } = trpc.event.findUnique.useQuery({
    id,
  })
  const authorId = Number(data?.authorId)
  if (isLoading) {
    return 'Loading...'
  }

  if (!data) {
    return 'No data'
  }
  let isParticipation = false
  const findUser = data?.participations.find((user) => user.user.id === session.data?.user.id)

  if (findUser) {
    isParticipation = true
  }

  return (
    <EventDetail
      {...data}
      action={
        <ActionButtons
          isParticipation={isParticipation}
          eventId={id}
          userId={userId}
          authorId={authorId}
          onSuccess={refetch}
        />
      }
    />
  )
}
