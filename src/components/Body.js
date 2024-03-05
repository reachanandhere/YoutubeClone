import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <section className='flex'>
        <Sidebar />
        <MainContainer />

    </section>
  )
}

export default Body