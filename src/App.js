import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import ContactUs from './ContactUs'
import SignUpUser from './SignUpUser'
import Product from './Product'
import Services from './Services'
import About from './About'
import ProductDetails from './ProductDetails'
import AddToCart from './AddToCart'
export class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Home />
          <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/product' element={<Product />}></Route>
            <Route path='/contact/' element={<ContactUs />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/details' element={<ProductDetails />}></Route>
            <Route path='/cart' element={<AddToCart />}></Route>
            {/* <Route path='/SignUpUser' element={<SignUpUser />} /> */}
            {/* <SignUpUser/> */}
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

export default App