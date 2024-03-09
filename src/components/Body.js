import React from 'react'
import Sidebar from './Sidebar'
import { useSelector} from 'react-redux'
import { Outlet } from 'react-router-dom'
 
const Body = () => {
  const showMenu=useSelector(store=>store?.app?.isMenuOpen)

  return (
    <section className='flex'>
       {showMenu && <Sidebar />}
        <Outlet />

    </section>
  )
}

export default Body