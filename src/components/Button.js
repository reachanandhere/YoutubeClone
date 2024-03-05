import React from 'react'

const Button = ({val}) => {
  return (
    <div>
        <button className='px-4 py-1 m-5 bg-slate-400 text-white rounded-md'>{val}</button>
    </div>
  )
}

export default Button