import { createContext, useEffect, useState } from "react";
import { ReservasContextType, TurnoReservadoType, TurnosJSON } from "../types/categorias";
import turnos from '../db/db.json'
import { toast } from "react-toastify";

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

  const storageTurns = JSON.parse(localStorage.getItem('turns') as string) || turnos
  const [date, setDate] = useState("");
  const [progreso, setProgreso] = useState(0);
  const [service, setService] = useState("");
  const [time, setTime] = useState("");
  const [turns, setTurns] = useState<TurnosJSON[]>(storageTurns);

  const saveReservation = (turnId: TurnosJSON['id']) => {
    const turnIdx = turns.findIndex(turno => turno.id === turnId);
    const newTurns = structuredClone(turns)
    newTurns[turnIdx].reservado = true
    setTurns(newTurns)
    localStorage.setItem('turns', JSON.stringify(newTurns))
  }

  const cancelTurn = (id: TurnoReservadoType['id']) => {
    const newTurns = turns.map(turno => {
      if(turno.id === id){
        return{
          ...turno,
          reservado: false
        }
      }else{
        return turno
      }
    })
    setTurns(newTurns)
    localStorage.setItem('turns', JSON.stringify(newTurns))
    toast.error('❌ Turno Cancelado',{
      position: "top-center",
      className: 'bg-pink-200 font-semibold'
    })
    const newList = turnosReservados.filter(turno => turno.id != id)
    setTurnosReservados(newList)
  }

  const createTurn = () => {
    const getTurnDate = (date:string) => {
      const turnDate = date.split('/').reverse()
      for(let i=0; i<=2; i++){
        if(turnDate[i].length < 2){
          turnDate[i] = turnDate[i].concat('0').split('').reverse().join('')
        }
      }
      return turnDate.join('-')
    }
    const newDate = getTurnDate(date)
    const turnId = turns.find(turno => turno.fechaTurno === newDate && turno.horaTurno === time)
    if(turnId){
      const newTurno = {
        id: turnId.id,
        servicio: service,
        fecha: date,
        hora: time,
      }
      saveReservation(turnId.id)
      setTurnosReservados([...turnosReservados, newTurno]);
      const resolvePromise = new Promise(resolve => setTimeout(resolve, 600))
      toast.promise(
        resolvePromise,
        {
          pending: '🕐 Guardando Turno',
          success: '💖💅 Turno Creado',
          error: '❌ Ocurrió un error, intenta de nuevo',
        },{
          position: 'top-center',
        }
      )
      setTimeout(() => {
        setService('')
        setTime('')
        setDate('')
      }, 1100);
    }
  };

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
        cancelTurn,
        createTurn,
      }}
    >
      {children}
    </ReservasContext.Provider>
  );
};
