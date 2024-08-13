import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
const App = () => {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/wishlist' element={<Wishlist/>}/>
  <Route path='/cart' element={<Cart/>}/>
    </Routes>
</BrowserRouter>
  )
}

export default App