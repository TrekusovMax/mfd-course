import { useSession } from 'next-auth/react'
import Link from 'next/link'

type AuthActionProps = {
  isAuth: boolean
}

export const AuthAction = ({ isAuth }: AuthActionProps) => {
  const session = useSession()

  return isAuth ? (
    <>
      <span className="font-medium text-white">{session.data?.user.name} </span>
      <Link
        className="font-medium text-blue-500"
        href="/api/auth/signout"
        aria-current="page"
      >
        Выйти
      </Link>
    </>
  ) : (
    <Link
      className="font-medium text-blue-500"
      href="/api/auth/signin"
      aria-current="page"
    >
      Войти
    </Link>
  )
}
