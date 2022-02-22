import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { AnimePage } from './pages/animePage/AnimePage'
import { Home } from './pages/home/Home'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="anime/:id" element={<AnimePage />} />
      </Route>
    </Routes>
  )
}

export default App
