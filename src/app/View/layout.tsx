import React, { FC } from 'react'

const View:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className='bg-gray-50'>
      {children}
    </div>
  )
}

export default View