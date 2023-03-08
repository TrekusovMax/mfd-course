import { useState, useRef } from 'react'

function init(array) {
  //если ничего не передали - работаем с true/false
  if (Array.isArray(array) || typeof array === 'undefined') {
    return Array.isArray(array) ? array[0] : true
  } else {
    //если передали число или строку - присваиваем её как единственное значение
    return array
  }
}

export function useToggle(array) {
  const [value, setValue] = useState(init(array))
  const itemRef = useRef(1)

  const toggle = (val) => {
    //работаем, если передали массив или ничего
    if (Array.isArray(array) || typeof array === 'undefined') {
      if (typeof array === 'undefined') {
        setValue((prevState) => !prevState)
      } else {
        const { length } = array
        //если передали конкретное значение - ставим его
        if (typeof val !== 'undefined') {
          setValue(val)
        } else {
          setValue(array[itemRef.current])
          itemRef.current =
            itemRef.current >= length - 1 ? 0 : itemRef.current + 1
        }
      }
    }
  }
  return [value, toggle]
}
