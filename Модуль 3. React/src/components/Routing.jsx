import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import Heroes from './pages/heroes'
import Locations from './pages/locations'
import Episodes from './pages/episodes'
import HeroesDetail from './pages/heroesDetail'
import LocationDetail from './pages/locationDetail'
import EpisodeDetail from './pages/episodeDetail'
import Login from './pages/login'
import PrivateRoute from './PrivateRoute'
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/heroes">
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
      <Route path="/location">
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
      <Route path="/episode">
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
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default Routing
