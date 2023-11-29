
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layouts from "./Components/Layouts"
import Home from "./Components/Home"
import Contacto from "./Components/Contacto"
import Productos from "./Components/Productos"

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}> 
          <Route index element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )

}

export default App