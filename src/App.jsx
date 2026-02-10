import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import ProductDetail from './Pages/ProductDetail'
import ProductList from './Pages/ProductList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer, toast , Slide ,Bounce } from 'react-toastify';

const App = () => {
  return (
    <>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
        />
        <div className="min-h-screen bg-gray-950 font-sans">
          <Navbar />
          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>

    </>
  )
}

export default App