import React from 'react'
import Paris2024 from '../../assets/Paris2024.png'

export const Card = () => {
  return (
        <>
    <div className='bg-blue-800 rounded-3xl w-4/5  gap-10 flex justify-center  flex-col'>
        <img className='w-full rounded-t-3xl' src={Paris2024} alt="" />
        <h1 className='pl-3 font-extrabold'>23 de abril 2024</h1>
        <h1 className='font-bold pl-3'>Faltan 100 dias para los juegos Olimpicos Paris 2024</h1>
        <h2 className='mb-10 pl-3 pr-3 text-2xl'>La Ceremonia de Apertura de los Juegos Olímpicos de París 2024 tendrá lugar dentro de exactamente 100 días (el 26 de julio)</h2>
    </div>
        </>
  )
}
