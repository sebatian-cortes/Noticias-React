import React from 'react'

export const Main = ({children}) => {
  return (
    <main className='max-h w-full bg-gray-600 flex items-center justify-center'>
      {children}
    </main>
  )
}
