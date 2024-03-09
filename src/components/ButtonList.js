import React from 'react'
import Button from './Button'
import { BUTTON_LIST } from '../utils/constants'

const ButtonList = () => {
  return (
    <section className='flex'>
      {
        BUTTON_LIST.map(b=>{
          return  <Button key={b} val={b} />
        })
      }
     
    </section>
  )
}

export default ButtonList