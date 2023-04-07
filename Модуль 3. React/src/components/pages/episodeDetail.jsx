import { Navigate, useNavigate, useParams } from 'react-router-dom'
import useData from '../../hooks/useData'

const EpisodeDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const url = `https://rickandmortyapi.com/api/episode/${id}`
  const { loading, error, data } = useData(url, null, id)

  if (error) {
    return <Navigate to="/episode" />
  }
  return (
    <>
      {loading && <p>Загрузка...</p>}
      {data.id && (
        <div className="grid mt-3 place-items-center grid-rows-3 grid-flow-col gap-3">
          <div className=" place-self-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            {`${data.name}`}
          </div>
          <div className="">
            <div className="space-y-1 text-left  md:text-3xl lg:text-4xl">
              <p>
                <span className="font-bold">Выход в эфир:</span>{' '}
                {`${data.air_date}`}
              </p>
              <p>
                <span className="font-bold">Эпизод:</span> {`${data.episode}`}
              </p>
            </div>
          </div>
          <div className="">
            <button
              onClick={() => navigate(-1)}
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Назад
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default EpisodeDetail
