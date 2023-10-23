import { BrowserRouter, Routes, Route } from "react-router-dom"
import EnvironmentStatus from "./pages/EnvironmentStatus"
import ReleaseProcess from "./pages/ReleaseProcess"
import Misc from "./pages/Misc"
import Header from "./components/Header"

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
       <Routes>
          <Route path="/" element={<EnvironmentStatus/>} />
          <Route path="/release-Process" element={<ReleaseProcess/>} />
          <Route path="/misc" element={<Misc/>} />
      </Routes>
    </BrowserRouter>
  )
}
