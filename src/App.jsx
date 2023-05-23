import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        {/* Rota: / */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate replace to="/" />} />

        {/* Rota: /contato */}
        <Route path="/contato" element={<Contact />} />

        {/* Qualquer outra rota */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
