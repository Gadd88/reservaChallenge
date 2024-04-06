import { useContext } from "react";
import { ReservasContext } from "../context/ReservasContext";

export const useReserva = () => {
  const {
    turnosReservados,
    progreso,
    date,
    time,
    service,
    turns,
    createTurn,
    setTurns,
    setDate,
    setTime,
    setService,
    setProgreso,
    cancelTurn,
  } = useContext(ReservasContext);

  const handleService = (value: string) => {
    setService(value);
    setProgreso(25);
  };
  const handleDate = (date: Date) => {
    setDate(date.toLocaleDateString());
    setProgreso(50);
  };

  const handleTime = (time: string) => {
    setTime(time);
    setProgreso(75);
  };

  

  const onClickBtn = (arg: string) => {
    if(arg == 'date') setDate('')
    if(arg == 'time') setTime('')
    if(arg == 'service') setService('')
    if(arg == 'continue') createTurn()
  }


  return {
    date,
    progreso,
    service,
    time,
    turnosReservados,
    turns,
    setTurns,
    handleService,
    handleDate,
    handleTime,
    createTurn,
    cancelTurn,
    onClickBtn,
  };
};
