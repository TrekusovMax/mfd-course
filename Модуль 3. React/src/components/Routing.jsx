import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import Heroes from './pages/heroes'
import Locations from './pages/locations'
import Episodes from './pages/episodes'
import HeroesDetail from './pages/heroesDetail'
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/heroes">
        <Route index element={<Heroes />} />
        <Route path=":id" element={<HeroesDetail />} />
      </Route>
      <Route path="/location" element={<Locations />} />
      <Route path="/episode" element={<Episodes />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default Routing
