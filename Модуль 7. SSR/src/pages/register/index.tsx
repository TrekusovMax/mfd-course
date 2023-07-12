import { RegisterForm } from '@/features/regisrer'
import { CreateUserSchema, trpc } from '@/shared/api'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function Register() {
  const [Error, setError] = useState({ haveError: false, message: '' })

  const login = (email: string, password: string) => {
    signIn('credentials', { callbackUrl: '/', email, password })
  }

  const { mutate } = trpc.user.create.useMutation({
    onSuccess: (data) => {
      login(data.email, data.password)
    },
    onError: (e) => {
      setError({
        haveError: e.message.match(/email/)?.[0] === 'email',
        message: 'Пользователь с таким email уже существует!',
      })
    },
  })

  const handleSubmit = (data: CreateUserSchema) => {
    mutate(data)
  }
  return <RegisterForm error={Error} onSubmit={handleSubmit} />
}
