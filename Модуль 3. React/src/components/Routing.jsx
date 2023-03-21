import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import Heroes from './pages/heroes'
import Locations from './pages/locations'
import Episodes from './pages/episodes'
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/heroes/:id?" element={<Heroes />} />
      <Route path="/location" element={<Locations />} />
      <Route path="/episode" element={<Episodes />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default Routing
