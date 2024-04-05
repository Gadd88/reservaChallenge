import React, { ReactNode } from "react";
import { ArrowIcon, Categorias, Turnos } from "../../components/";
import { Datepicker, Progress } from "flowbite-react";
import { useReserva } from "../../hooks/useReserva";

export const Reservas: React.FC = (): ReactNode => {
  
  const {time, date, service, progreso, createTurn, handleDate, handleTime, handleService} = useReserva()

  return (
    <div className="mx-auto flex flex-col items-center justify-start gap-1 h-[98%] w-[99%] max-w-[99%]">
      <h1 className="block mb-10">Reservar</h1>
      <section className="flex flex-col items-center justify-start gap-1 h-full w-full md:flex-row md:gap-3 md:items-start mx-auto pt-5">
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
          date && <Turnos date={date} handleTime={handleTime}/>
        }
      </section>
        {
          time &&
          <button className="p-3 border-2 border-pink-700 hover:bg-pink-700 hover:text-white text-black font-semibold my-5 focus:border-pink-700 active:border-pink-700 outline-none flex items-center justify-center gap-2" onClick={()=>createTurn()}>Continuar <ArrowIcon className="w-5 -rotate-90 object-cover"/> </button>
        }
    </div>
  );
};
