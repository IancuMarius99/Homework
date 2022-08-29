import './App.css'
import Layout from '../components/Layout/Layout'
import HomePage from '../pages/HomePage/HomePage'
import { CartPage } from '../pages/CartPage/CartPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import cartCounter from '../pages/HomePage/HomePage';


function App() {
 // aici tinem statul cu itemsCount
  return (
    <BrowserRouter>
      <Layout itemsCount={33}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<div>Not Found!</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}


export default App