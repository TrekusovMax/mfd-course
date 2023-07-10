import { EventCard } from '@/entities/event'
import { trpc } from '@/shared/api'

export default function Home() {
  const { data } = trpc.event.findMany.useQuery()

  return (
    <>
      <ul>
        {data?.map((event) => (
          <li key={event.id} className="mb-6">
            <EventCard {...event} />
          </li>
        ))}
      </ul>
    </>
  )
}
