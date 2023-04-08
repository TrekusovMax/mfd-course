import React, { useEffect, useState, useRef, useCallback } from 'react'

import ButtonSort from '../elements/buttonSort'
import SearchInput from '../elements/searchInput'
import useSort from '../hooks/useSort'
import useData from '../hooks/useData'
import HeroesCard from './heroesCard'

const Heroes = () => {
  const url = 'https://rickandmortyapi.com/api/character'
  const [pageNumber, setPageNumber] = useState(1)
  const { loading, hasMore, error, data } = useData(url, pageNumber)
  const [filteredData, setFilteredData] = useState(data)

  useEffect(() => {
    setFilteredData(data)
  }, [data])

  const observer = useRef()
  const searchValue = useRef()
  const lastNodeRef = useCallback(
    (node) => {
      if (loading) return
      if (observer.current) {
        observer.current.disconnect()
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore && !searchValue.current) {
          setPageNumber((prevState) => prevState + 1)
        }
      })
      if (node) {
        observer.current.observe(node)
      }
    },
    [loading, hasMore],
  )

  useSort(filteredData)

  const handleFilter = ({ target }) => {
    const { value } = target

    if (value === '') {
      searchValue.current = undefined
    } else {
      searchValue.current = value
    }

    const filter = data.filter(
      (d) => d.name.toLowerCase().indexOf(value.toLowerCase()) >= 0,
    )
    setFilteredData(filter)
  }
  return (
    <div>
      <div className="flex justify-between">
        <SearchInput label={'Поиск героя'} onChange={handleFilter} />
        <ButtonSort />
      </div>
      {loading && <h2>Загрузка...</h2>}
      {error && <h1 className="text-red-700">Произошла ошибка</h1>}
      {filteredData && filteredData.length ? (
        <div className="grid grid-cols-4 my-4 gap-4">
          {filteredData.map((d, index) => {
            if (filteredData.length === index + 1) {
              return (
                <HeroesCard heroes={d} lastNodeRef={lastNodeRef} key={d.id} />
              )
            } else {
              return <HeroesCard heroes={d} key={d.id} />
            }
          })}
        </div>
      ) : (
        <p className="mt-[200px] text-3xl">{'Героев не найдено'}</p>
      )}
    </div>
  )
}

export default Heroes
