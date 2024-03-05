import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { useSelector} from 'react-redux'

const Body = () => {
  const showMenu=useSelector(store=>store?.app?.isMenuOpen)

  return (
    <section className='flex'>
       {showMenu && <Sidebar />}
        <MainContainer />

    </section>
  )
}

export default Body