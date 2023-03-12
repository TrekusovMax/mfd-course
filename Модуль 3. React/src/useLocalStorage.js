import { useEffect, useState } from 'react'
export function useLocalStorage(initialValue) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    localStorage.getItem('token')
      ? setValue(JSON.parse(localStorage.getItem('token')))
      : setValue(initialValue)
  }, [initialValue])

  function setItem(value) {
    setValue(value)
    localStorage.setItem('token', JSON.stringify(value))
  }
  function removeItem() {
    setValue('')
    localStorage.removeItem('token')
  }
  return [value, { setItem, removeItem }]
}
