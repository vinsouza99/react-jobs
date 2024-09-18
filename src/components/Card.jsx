import React from 'react'

export const Card = ({bg = 'bg-gray-100',children}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        {children}
    </div>
  )
}
