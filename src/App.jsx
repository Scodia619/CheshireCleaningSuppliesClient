import { Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar"
import HomePage from "./Pages/HomePage"
import ProductsPage from "./Pages/ProductsPage"
import ContactUs from "./Pages/ContactUs"
import LogIn from "./Pages/LogIn"

function App() {
 
  return (

    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/products" element={<ProductsPage />}/>
        <Route path="/contact" element={<ContactUs />}/>
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  )
}

export default App
