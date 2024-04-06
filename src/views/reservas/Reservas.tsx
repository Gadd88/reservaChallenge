import React, { ReactNode } from "react";
import { Servicios, Turnos, BtnAction } from "../../components/";
import { Datepicker, Progress } from "flowbite-react";
import { useReserva } from "../../hooks/useReserva";

export const Reservas: React.FC = (): ReactNode => {
  
  const {time, date, service, progreso, handleDate, handleTime, handleService} = useReserva()

  return (
    <div className="mx-auto flex flex-col items-center justify-start gap-1 h-[98%] w-[99%] max-w-[99%]">
      <h1 className="block">Reservar</h1>
      <section className="flex flex-col items-center justify-start gap-1 h-full w-full md:gap-3 mx-auto">
        <Progress progress={progreso} size='sm' color="pink" className="my-5 border-1 border-black"/>
        {
          !service &&
          <Servicios handleService={handleService}/>
        }
        {
          !date &&
          service && 
          <div className="flex flex-col gap-5 items-center">
            <Datepicker
              id="date"
              inline
              language="es-AR"
              labelTodayButton="Hoy"
              labelClearButton="Limpiar"
              showClearButton={false}
              onSelectedDateChanged={handleDate}
            />
            <BtnAction type='service'/>
          </div>
        }
        {
          date && 
          <>
            <Turnos date={date} handleTime={handleTime}/>
            <BtnAction type='date'/>
          </>
        }
      </section>
        {
          service &&
          date &&
          time &&
          <BtnAction type='continue'/>
        }
    </div>
  );
};
