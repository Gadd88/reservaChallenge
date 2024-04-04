import React, { ReactNode, useContext, useReducer } from 'react'
import { useReserva } from '../../hooks/useReserva'

export const MisReservas:React.FC = ():ReactNode => {

  const { turnosReservados } = useReserva()

  return (
    <div className='mx-auto my-5 flex flex-col items-center justify-center'>
      <h1 className=''>Mis Reservas</h1>
      <ul className='border-2 bg-slate-100 w-full min-h-52 mt-5'>
        {
          turnosReservados?.map(turno => (
            <div>
              <h2>{turno.servicio}</h2>
              <p>{turno.fecha}</p>
              <p>{turno.hora}</p>
            </div>
          ))
        }
      </ul>
    </div>
  )
}
