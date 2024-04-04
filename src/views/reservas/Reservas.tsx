import React, { ReactNode } from "react";
import { Categorias, Turnos } from "../../components/";
import { Datepicker, Progress } from "flowbite-react";
import { useReserva } from "../../hooks/useReserva";

export const Reservas: React.FC = (): ReactNode => {
  
  const {time, date, service, progress, createTurn, handleDate, handleTime, handleService} = useReserva()
  
  return (
    <div className="mx-auto flex flex-col items-center justify-between h-full">
      <Progress progress={progress}/>
      <h1>Reservas</h1>
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
        date && <Turnos date={date} handleTime={handleTime}/>
      }
      {
        time &&
        <button className="p-3 border-2 border-black hover:bg-black hover:text-white text-black font-semibold mt-2" onClick={()=>createTurn()}>Continuar &#x27A1; </button>
      }
    </div>
  );
};
