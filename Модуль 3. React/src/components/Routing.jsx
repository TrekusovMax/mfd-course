import { Navigate, Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import { Suspense, lazy } from 'react'
import { Heroes } from '../pages/heroes'
import { Locations } from '../pages/locations'
import { Episodes } from '../pages/episodes'

const Routing = () => {
  const HomePage = lazy(() => import('../pages/homePage'))
  //const Heroes = lazy(() => import('../pages/heroes'))
  const HeroesDetail = lazy(() => import('../pages/heroesDetail'))
  //const Locations = lazy(() => import('../pages/locations'))
  const LocationDetail = lazy(() => import('../pages/locationDetail'))
  //const Episodes = lazy(() => import('../pages/episodes'))
  const EpisodeDetail = lazy(() => import('../pages/episodeDetail'))
  const Login = lazy(() => import('../pages/login'))

  return (
    <Suspense fallback="Загрузка...">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="heroes">
          <Route
            index
            element={
              <PrivateRoute>
                <Heroes />
              </PrivateRoute>
            }
          />
          <Route
            path=":id"
            element={
              <PrivateRoute>
                <HeroesDetail />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="location">
          <Route
            index
            element={
              <PrivateRoute>
                <Locations />
              </PrivateRoute>
            }
          />
          <Route
            path=":id"
            element={
              <PrivateRoute>
                <LocationDetail />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="episode">
          <Route
            index
            element={
              <PrivateRoute>
                <Episodes />
              </PrivateRoute>
            }
          />
          <Route
            path=":id"
            element={
              <PrivateRoute>
                <EpisodeDetail />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to="/rick-morty" />} />
      </Routes>
    </Suspense>
  )
}

export default Routing
