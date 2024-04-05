import React, { ReactNode } from 'react'
import { useReserva } from '../../hooks/useReserva'

export const MisReservas:React.FC = ():ReactNode => {

  const { turnosReservados, cancelTurn } = useReserva()

  return (
    <div className='mx-auto flex flex-col items-start justify-start min-w-80 w-[99%] max-w-[99%] h-full'>
      <h1 className=''>Mis Reservas</h1>
      <ul className='w-full p-5 flex flex-col items-center justify-start gap-2 min-h-80 mt-5'>
        {
          turnosReservados.length < 1 && <p className='font-bold text-pink-700'>No tiene turnos reservados</p>
        }
        {
          turnosReservados.map(turno => (
            <div className='p-5 rounded-md min-h-24 w-full bg-pink-100 leading-6 relative flex flex-col items-start justify-around' key={crypto.randomUUID()}>
              <h2 className='font-semibold'>{turno.servicio}</h2>
              <p className='text-pink-600 font-semibold'>{turno.fecha}</p>
              <p className='text-pink-600 font-semibold'>{turno.hora}</p>
              <button onClick={()=>cancelTurn(turno.id)} className='bg-pink-500 text-white font-bold rounded-md mt-3 w-4/5 place-self-center'>Cancelar</button>
            </div>
          ))
        }
      </ul>
    </div>
  )
}
