import { createContext, useEffect, useState } from "react";
import { ReservasContextType, TurnoReservadoType, TurnosJSON } from "../types/categorias";
import turnos from '../db/db.json'

export const ReservasContext = createContext<ReservasContextType>(
  {} as ReservasContextType
);

export const ReservasProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const initialReservations: TurnoReservadoType[] = JSON.parse(localStorage.getItem('myTurns') as string) || []
  const [turnosReservados, setTurnosReservados] = useState<
    TurnoReservadoType[]
  >(initialReservations);
  const [date, setDate] = useState("");
  const [progreso, setProgreso] = useState(0);
  const [service, setService] = useState("");
  const [time, setTime] = useState("");
  const [turns, setTurns] = useState<TurnosJSON[]>([]);

  const saveReservation = (turnId: TurnosJSON['id']) => {
    const turnIdx = turns.findIndex(turno => turno.id === turnId);
    const newTurns = structuredClone(turns)
    newTurns[turnIdx].reservado = true
    setTurns(newTurns)
  }

  useEffect(()=>{
    setTurns(turnos)
  },[])

  useEffect(()=>{
    localStorage.setItem('myTurns', JSON.stringify(turnosReservados))
  },[turnosReservados])

  return (
    <ReservasContext.Provider
      value={{
        turnosReservados,
        date,
        service,
        time,
        progreso,
        turns,
        setTurns,
        saveReservation,
        setTurnosReservados,
        setDate,
        setService,
        setTime,
        setProgreso,
      }}
    >
      {children}
    </ReservasContext.Provider>
  );
};
