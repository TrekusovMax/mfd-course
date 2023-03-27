import React from 'react'
import { useSearchParams } from 'react-router-dom'

const ButtonSort = () => {
  const [, setSearchParams] = useSearchParams({ created: 'asc' })
  return (
    <div className="flex justify-end rounded-md  mt-5" role="group">
      <button
        onClick={() => setSearchParams({ created: 'asc' })}
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        Дата создания по возрастанию
      </button>
      <button
        onClick={() => setSearchParams({ created: 'desk' })}
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        Дата создания по убыванию
      </button>
    </div>
  )
}

export default ButtonSort
