import { Navigate, useNavigate, useParams } from 'react-router-dom'
import useData from '../hooks/useData'

const HeroesDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const url = `https://rickandmortyapi.com/api/character/${id}`
  const { loading, error, data } = useData(url, null, id)

  if (error) {
    return <Navigate to="/rick-morty/heroes" />
  }
  return (
    <>
      {loading && <p>Загрузка...</p>}
      {data.id && (
        <div className="grid mt-3 place-items-center grid-rows-3 grid-flow-col gap-3">
          <div className="row-span-2 place-self-end">
            <img
              className=" mb-3 h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800"
              src={`${data.image}`}
              alt={`${data.name}`}
            />
          </div>
          <div className=" col-span-3  ">
            <button
              onClick={() => navigate(-1)}
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Назад
            </button>
          </div>
          <div className="col-span-1 place-self-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            {`${data.name}`}
          </div>
          <div className="row-span-1 col-span-1 ">
            <div className=" max-w-md space-y-1 text-left  md:text-3xl lg:text-4xl">
              <p>
                <span className="font-bold">Status:</span> {`${data.status}`}
              </p>
              <p>
                <span className="font-bold">Species:</span> {`${data.species}`}
              </p>
              {data.type && (
                <p>
                  <span className="font-bold">Type: </span>
                  {data.type}
                </p>
              )}
              <p>
                <span className="font-bold">Gender: </span>
                {`${data.gender}`}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default HeroesDetail
