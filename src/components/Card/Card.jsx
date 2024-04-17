import React from 'react'
import Paris2024 from '../../assets/Paris2024.png'

export const Card = () => {
  return (
    <div className='bg-blue-800 w-4/5 h-max gap-10 flex justify-center items-center flex-col'>
        <img className='w-full' src={Paris2024} alt="" />
        <h1 className='font-bold'>Faltan 100 dias para los juegos Olimpicos Paris 2024</h1>
        <h2 className='mb-10'>La Ceremonia de Apertura de los Juegos Olímpicos de París 2024 tendrá lugar dentro de exactamente 100 días (el 26 de julio)</h2>
    </div>
  )
}
