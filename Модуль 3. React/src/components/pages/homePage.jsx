import React from 'react'

const HomePage = () => {
  return (
    <div className="h-screen my-5 flex flex-col items-center  ">
      <h1 className="text-3xl font-serif block">Добро пожаловать во вселенную Рика и Морти!</h1>
      <img
        alt="рик и морти"
        className="w-[800px] my-3  shadow-xl"
        src="https://cdn.forbes.ru/forbes-static/new/2022/07/1-62e263f64f22c.jpg"
      />
    </div>
  )
}

export default HomePage
