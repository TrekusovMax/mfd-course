import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

type AuthActionProps = {
  isAuth: boolean
}

export const AuthAction = ({ isAuth }: AuthActionProps) => {
  const session = useSession()

  return isAuth ? (
    <>
      <span className="font-medium text-white">{session.data?.user.name} </span>
      <button
        className="font-medium text-blue-500"
        aria-current="page"
        onClick={() => signOut({ callbackUrl: '/' })}
      >
        Выйти
      </button>
    </>
  ) : (
    <div className="flex flex-row gap-4 ">
      <Link
        href={'/register'}
        className="font-medium text-white"
        aria-current="page"
      >
        Зарегистрироваться
      </Link>
      <button
        onClick={() => signIn()}
        className="font-medium text-blue-300"
        aria-current="page"
      >
        Войти
      </button>
    </div>
  )
}
