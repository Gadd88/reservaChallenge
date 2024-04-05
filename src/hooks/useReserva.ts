import { useContext } from "react";
import { ReservasContext } from "../context/ReservasContext";
import { useNavigate } from "react-router-dom";
import { TurnoReservadoType } from "../types/categorias";
import { toast } from 'react-toastify'

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
    const selectedTurnIdx = turnosReservados.findIndex(turno => turno.id === id);
    if(selectedTurnIdx){
      const newTurns = structuredClone(turns)
      newTurns[selectedTurnIdx].reservado = false
      setTurns(newTurns)
      toast.error('❌ Turno Cancelado',{
        position: "top-center",
        className: 'bg-pink-200 font-semibold'
      })
    }
    const newList = turnosReservados.filter(turno => turno.id !== id)
    setTurnosReservados(newList)
  }

  const createTurn = () => {
    const getTurnDate = (date:string) => {
      const turnDate = date.split('/').reverse()
      console.log(turnDate)
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
        navigate('/misreservas')
      }, 1100);
    }
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
