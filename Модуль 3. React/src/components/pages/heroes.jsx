import React, { useEffect, useState, useRef, useCallback } from 'react'

import ButtonSort from '../elements/buttonSort'
import SearchInput from '../elements/searchInput'
import useSort from '../../hooks/useSort'
import useCharacter from '../../hooks/useCharacter'
import HeroesCard from './heroesCard'

const Heroes = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const { loading, hasMore, error, character } = useCharacter(pageNumber)
  const [filteredData, setFilteredData] = useState(character)

  useEffect(() => {
    setFilteredData(character)
  }, [character])

  const observer = useRef()
  const lastNodeRef = useCallback(
    (node) => {
      if (loading) return
      if (observer.current) {
        observer.current.disconnect()
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
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

    const filter = character.filter(
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
