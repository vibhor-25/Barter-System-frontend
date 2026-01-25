import React from 'react'
import './index.css';
import './styles/normal.css';
import { BrowserRouter, Routes, Route ,Link } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Wishlist from './Pages/Wishlist'
import Requests from './Pages/Requests'
import MyProfile from './Pages/MyProfile'
import Settings from './Pages/Settings' 
import Items from './Pages/Items'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/requests' element={<Requests />} />
          <Route path='/items' element={<Items />} />
          <Route path='/myprofile' element={<MyProfile />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App