import React from 'react'
import { useSearchParams } from 'react-router-dom'
import ASC from './asc.svg'
import DESK from './desk.svg'

const ButtonSort = () => {
  const [searchParams, setSearchParams] = useSearchParams({ created: 'asc' })
  const params = searchParams.get('created')
  return (
    <div className=" rounded-md  mt-5" role="group">
      <button
        onClick={() =>
          params === 'asc'
            ? setSearchParams({ created: 'desk' })
            : setSearchParams({ created: 'asc' })
        }
        type="button"
        className="flex gap-1 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        Сортировка
        {params === 'asc' ? <img src={ASC} /> : <img src={DESK} />}
      </button>
    </div>
  )
}

export default ButtonSort
