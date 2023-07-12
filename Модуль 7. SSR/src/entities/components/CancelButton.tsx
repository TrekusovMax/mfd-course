import { useRouter } from 'next/router'

export const CancelButton = () => {
  const router = useRouter()
  const handleCancelClick = () => {
    router.back()
  }
  return (
    <button
      onClick={handleCancelClick}
      type="button"
      className="text-sm font-semibold leading-6 text-gray-900">
      Отмена
    </button>
  )
}
