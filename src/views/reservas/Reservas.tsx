import React, { ReactNode, useState } from "react";
import { Categorias, Turnos } from "../../components/";
import { Datepicker, Progress } from "flowbite-react";
import { useReserva } from "../../hooks/useReserva";

export const Reservas: React.FC = (): ReactNode => {
  
  const {time, date, service, progreso, createTurn, handleDate, handleTime, handleService} = useReserva()
  const [idTurn, setIdTurn] = useState('')

  return (
    <div className="mx-auto flex flex-col items-center justify-start gap-1 h-[98%] w-full">
      <h1>Reservar</h1>
      <Progress progress={progreso} size='sm' color="pink" className="my-5 border-1 border-black"/>
      <Categorias handleService={handleService}/>
      {
        service && 
        <Datepicker
          id="date"
          inline
          language="es-AR"
          labelTodayButton="Hoy"
          labelClearButton="Limpiar"
          onSelectedDateChanged={handleDate}
        />
      }
      {
        date && <Turnos date={date} handleTime={handleTime} setIdTurn={setIdTurn}/>
      }
      {
        time &&
        <button className="p-3 border-2 border-pink-700 hover:bg-pink-700 hover:text-white text-black font-semibold my-5 focus:border-pink-700 active:border-pink-700 outline-none" onClick={()=>createTurn(idTurn)}>Continuar &#x27A1; </button>
      }
    </div>
  );
};
