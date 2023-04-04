import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import Heroes from './pages/heroes'
import Locations from './pages/locations'
import Episodes from './pages/episodes'
import HeroesDetail from './pages/heroesDetail'
import LocationDetail from './pages/locationDetail'
import EpisodeDetail from './pages/episodeDetail'
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/heroes">
        <Route index element={<Heroes />} />
        <Route path=":id" element={<HeroesDetail />} />
      </Route>
      <Route path="/location">
        <Route index element={<Locations />} />
        <Route path=":id" element={<LocationDetail />} />
      </Route>
      <Route path="/episode">
        <Route index element={<Episodes />} />
        <Route path=":id" element={<EpisodeDetail />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default Routing
