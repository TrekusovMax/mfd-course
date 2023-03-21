import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data/characters.json'

const Heroes = () => {
  //console.log(data)
  return (
    <div className="grid grid-cols-4 my-4 gap-4">
      {data.map((d) => (
        <div
          key={d.id}
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="flex my-5 flex-col items-center">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={`${d.image}`}
              alt={`${d.name}`}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {d.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {d.species}
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <Link
                to={`/heroes/${d.id}`}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Heroes
