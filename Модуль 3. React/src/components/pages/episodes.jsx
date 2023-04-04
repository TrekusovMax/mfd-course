import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useSort from '../../hooks/useSort'
import { episode } from '../data'
import ButtonSort from '../elements/buttonSort'
import SearchInput from '../elements/searchInput'

const Episodes = () => {
  const [filteredData, setFilteredData] = useState(episode)
  useSort(filteredData)

  const handleFilter = ({ target }) => {
    const { value } = target
    const filter = episode.filter((d) => d.name.toLowerCase().indexOf(value.toLowerCase()) >= 0)
    setFilteredData(filter)
  }

  return (
    <div>
      <div className="flex justify-between">
        <SearchInput label={'Поиск эпизода'} onChange={handleFilter} />
        <ButtonSort />
      </div>
      {filteredData.length ? (
        <div className="grid grid-cols-4 my-4 gap-4">
          {filteredData.map((d) => (
            <div
              key={d.id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex my-5 flex-col items-center">
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{d.name}</h5>

                <div className="flex mt-4 space-x-3 md:mt-6">
                  <Link
                    to={`/episode/${d.id}`}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-[200px] text-3xl">{'Эпизодов не найдено'}</p>
      )}
    </div>
  )
}

export default Episodes
