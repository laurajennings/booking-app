import {Route, Routes} from "react-router-dom";
import IndexPage from "./pages/indexPage.jsx"

import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>

  )
}

export default App
