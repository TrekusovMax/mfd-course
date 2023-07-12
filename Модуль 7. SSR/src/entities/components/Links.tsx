import Link from 'next/link'
import { useRouter } from 'next/router'

type AuthActionProps = {
  isAuth: boolean
}

export const Links = ({ isAuth }: AuthActionProps) => {
  const router = useRouter()
  const isCurrentPage = router.pathname === '/events/create'
  const linkStyle = isCurrentPage
    ? 'text-blue-500 '
    : 'text-white hover:underline dark:text-gray-500 dark:hover:text-gray-400'
  const href = isCurrentPage ? '' : '/events/create'
  return (
    <>
      {isAuth && (
        <>
          <Link
            className={`font-medium ${linkStyle}`}
            href={href}
            aria-current={isCurrentPage && 'page'}>
            Создать событие
          </Link>
        </>
      )}
    </>
  )
}
