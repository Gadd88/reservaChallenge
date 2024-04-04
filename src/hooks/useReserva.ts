import { useContext, useState } from "react"
import { ReservasContext } from "../context/ReservasContext"

type TurnoReservadoType = {
    fecha: string,
    hora: string,
    servicio: string
}

export const useReserva = () => {
const [date, setDate] = useState('')
  const [progress, setProgress] = useState(0)
  const [service, setService] = useState('')
  const [time, setTime] = useState('')
    const [turnoReservado, setTurnoReservado] = useState<TurnoReservadoType>()

  const { turnosReservados, setTurnosReservados } = useContext(ReservasContext)

  const handleService = (value: TurnoReservadoType['servicio']) => {
    setService(value)
    setTurnoReservado({ 
        ...turnoReservado,
          servicio: value
    })
    setProgress(25)
  }
  const handleDate = (date: Date) => {
    setDate(date.toLocaleDateString());
    setTurnosReservados([
        ...turnosReservados,
        {
            fecha: date.toLocaleDateString(),
        }
    ])
    setProgress(50)
  };

  const handleTime = (time: string) => {
    setTime(time)
    setTurnosReservados([
        ...turnosReservados,
        {
          hora: time
        }
    ])
    setProgress(75)
  }
  const handleTurn = (turn: TurnoReservadoType) => {
    setTurnosReservados([
        ...turnosReservados,
        turn
    ])
  }
  return {
    date,
    progress,
    service,
    time,
    turnosReservados,
    turnoReservado,
    setTurnoReservado,
    handleService,
    handleDate,
    handleTime,
    handleTurn
  }
}
