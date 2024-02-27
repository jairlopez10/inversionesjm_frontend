import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./paginas/Home"
import Checkout from "./paginas/Checkout"
import Nosotros from "./paginas/Nosotros"

function App() {

  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="checkout" element={<Checkout />}/>
          <Route path="nosotros" element={<Nosotros />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
