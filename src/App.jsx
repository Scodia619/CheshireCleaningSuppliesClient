import { Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar"
import HomePage from "./Pages/HomePage"
import ProductsPage from "./Pages/ProductsPage"
import ContactUs from "./Pages/ContactUs"
import LogIn from "./Pages/LogIn"
import Basket from "./Pages/Basket"
import ViewOrdersContainer from "./Components/ViewOrdersContainer"

function App() {
 
  return (

    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/products" element={<ProductsPage />}/>
        <Route path="/contact" element={<ContactUs />}/>
        <Route path="/login" element={<LogIn />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/orders" element={<ViewOrdersContainer />} />
      </Routes>
    </>
  )
}

export default App
