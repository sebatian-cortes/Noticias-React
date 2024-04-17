import React from 'react'

export const New = ({img,date,description}) => {
  return (
    <article className='flex flex-row bg-blue-300 '>
        <div className='w-1/3'>
            <img src={img} alt="" />
        </div>
        <div className='w-4/6 flex flex-col justify-center'>
            <h1>{date}</h1>
            <h2>{description}</h2>
        </div>
    </article>
  )
}
