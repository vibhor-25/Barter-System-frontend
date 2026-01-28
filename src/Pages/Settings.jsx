import React from 'react'
import Menu from '../components/Menu'

const Settings = () => {
  return (
    <div className='flex'>
        <img src = 'public/images/MenuBg.png' alt='Background Image' className='fixed top-0 left-0 w-full h-full -z-10 object-cover'/>
        <Menu />
        <div className="flex justify-center items-center h-screen w-full font-bold text-4xl">
          <h1>COMING SOON... :P</h1>       
           </div>
    </div>
  )
}

export default Settings