import React, { ReactNode, useState } from "react";
import { Categorias, Turnos } from "../../components/";
import { Datepicker, Progress } from "flowbite-react";

export const Reservas: React.FC = (): ReactNode => {
  const [reservaDate, setReservaDate] = useState('')
  const [progreso, setProgreso] = useState(0)
  const [servicio, setServicio] = useState('')
  const [hora, setHora] = useState('')

  const [turnoReservado, setTurnoReservado] = useState({
    fecha: '',
    servicio: '',
    hora: ''
  })

  const handleServicio = (value:string) => {
    setServicio(value)
    setTurnoReservado({
      ...turnoReservado,
      servicio: value
    })
    setProgreso(25)
  }
  const handleDate = (date: Date) => {
    setReservaDate(date.toLocaleDateString());
    setTurnoReservado({
      ...turnoReservado,
      fecha: date.toLocaleDateString(),
    })
    setProgreso(50)
  };

  const handleHora = (hora: string) => {
    setHora(hora)
    setTurnoReservado({
      ...turnoReservado,
      hora: hora
    })
    setProgreso(75)
  }
  
  return (
    <div className="p-5 mx-auto">
      <Progress progress={progreso}/>
      <h1>Reservas</h1>
      <Categorias handleServicio={handleServicio}/>
      {
        servicio && 
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
        reservaDate && <Turnos date={reservaDate} handleHora={handleHora}/>
      }
      {
        hora &&
        <button className="p-3 border-2 border-black hover:bg-black hover:text-white text-black font-semibold mt-2" onClick={()=>{console.log(turnoReservado)}}>Continuar &#x27A1; </button>
      }
    </div>
  );
};
