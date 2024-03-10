import React from 'react'
import { USER_ICON } from '../utils/constants'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex p-2 shadow-md'>
         <img className="h-6" src={USER_ICON}></img>
         <span className='font-bold px-1 w-20'>{name}</span>
         <span className='pl-1'>{message}</span>
    </div>
  )
}

export default ChatMessage