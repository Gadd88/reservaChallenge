import { useContext, useState } from "react";
import { ReservasContext } from "../context/ReservasContext";
import { TurnoReservadoType } from "../types/categorias";

export const useReserva = () => {
  const [date, setDate] = useState("");
  const [progress, setProgress] = useState(0);
  const [service, setService] = useState("");
  const [time, setTime] = useState("");
  const [turno, setTurno] = useState<TurnoReservadoType>();

  const { turnosReservados, setTurnosReservados } = useContext(ReservasContext);

  const handleService = (value: string) => {
    setService(value);
    setProgress(25);
  };
  const handleDate = (date: Date) => {
    setDate(date.toLocaleDateString());
    setProgress(50);
  };

  const handleTime = (time: string) => {
    setTime(time);
    setProgress(75);
  };

  const createTurn = ():void => {
    setTurno({
        servicio: service,
        fecha: date,
        hora: time
    })
    console.log(turno)
    setTurnosReservados([...turnosReservados, turno]);
    console.log(turnosReservados);
  };

  return {
    date,
    progress,
    service,
    time,
    turnosReservados,
    handleService,
    handleDate,
    handleTime,
    createTurn
  };
};
