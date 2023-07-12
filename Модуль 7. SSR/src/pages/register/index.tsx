import { RegisterForm } from '@/features/regisrer'
import { CreateUserSchema, trpc } from '@/shared/api'
import { useRouter } from 'next/router'


export default function Register() {
  const router = useRouter()

  const { mutate } = trpc.user.create.useMutation({
    onSuccess: () => {
      router.push('/')
    },
    onError: (e) => {
      console.log(e)
    },
  })

  const handleSubmit = (data: CreateUserSchema) => {
    mutate(data)
  }
  return <RegisterForm onSubmit={handleSubmit} />
}
