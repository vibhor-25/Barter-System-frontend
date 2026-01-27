import React, { useState } from 'react'
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
// import ProtectedLayout from './components/ProtectedLayout';

export const tintContext = React.createContext();
const App = () => {

  const [bgTint, setBgTint] = useState(false);

  return (
      <BrowserRouter>
      <tintContext.Provider value={{ bgTint, setBgTint }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          {/* <Route element={<ProtectedLayout />}> */}
          <Route path='/home' element={<Homepage />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/requests' element={<Requests />} />
          <Route path='/items' element={<Items />} />
          <Route path='/myprofile' element={<MyProfile />} />
          <Route path='/settings' element={<Settings />} />
          {/* </Route> */}
        </Routes>
        {bgTint && <div className="tint" id='tint'></div>}
      </tintContext.Provider>
      </BrowserRouter>
  )
}

export default App