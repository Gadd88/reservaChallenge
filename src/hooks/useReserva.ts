import { useContext } from "react";
import { ReservasContext } from "../context/ReservasContext";
import { useNavigate } from "react-router-dom";
import { TurnoReservadoType } from "../types/categorias";

export const useReserva = () => {
  const navigate = useNavigate()
  const {
    turnosReservados,
    progreso,
    date,
    time,
    service,
    turns,
    saveReservation,
    setTurns,
    setDate,
    setTime,
    setService,
    setProgreso,
    setTurnosReservados,
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

  const cancelTurn = (id: TurnoReservadoType['id']) => {
    const selectedTurn = turnosReservados.find(turno => turno.id === id);
    if(selectedTurn){
      const turnIdx = turns.findIndex(turno => turno.fechaTurno == selectedTurn.fecha.split('/').reverse().join('-0') && turno.horaTurno === selectedTurn.hora)
      const newTurns = structuredClone(turns)
      newTurns[turnIdx].reservado = false
      setTurns(newTurns)
    }
      const newList = turnosReservados.filter(turno => turno.id !== id)
      setTurnosReservados(newList)
  }

  const createTurn = (idTurn: string) => {
    const newTurno = {
      id: crypto.randomUUID(),
      servicio: service,
      fecha: date,
      hora: time,
    }
    saveReservation(idTurn)
    setTurnosReservados([...turnosReservados, newTurno]);
    setTimeout(() => {
      setService('')
      setTime('')
      setDate('')
      navigate('/misreservas')
    }, 500);
  };

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
    cancelTurn
  };
};
