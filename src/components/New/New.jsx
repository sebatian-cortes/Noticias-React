import React from 'react'

export const New = ({img,date,description}) => {
  return (
    <article className='flex flex-row bg-blue-800 w-11/12 rounded-3xl'>
        <div className='w-1/3'>
            <img className='rounded-l-3xl' src={img} alt="" />
        </div>
        <div className='w-4/6 flex flex-col justify-center p-3'>
            <h1 className='font-extrabold'>{date}</h1>
            <h2>{description}</h2>
        </div>
    </article>
  )
}
