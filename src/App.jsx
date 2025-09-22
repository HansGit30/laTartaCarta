import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Carta from './pages/Carta'

const App = () => {
    return (
        <Routes>
            <Route path="/laTartaCarta" element={<Home />} />
            <Route path="/carta" element={<Carta />} />
        </Routes>
    )
}

export default App