import { Dispatch, SetStateAction } from "react"

export type ServiciosType = {
    tituloServicio: string,
    descripcionServicio: string
}

export type ServiceJson = {
    id: number,
    name: string,
    description: string,
    category: string,
}

export type Services = {
    service: ServiceJson[]
}

export type TurnoReservadoType = {
    id: string,
    fecha: string,
    hora: string,
    servicio: string
}

export type TurnosJSON = {
    id: string,
    horaTurno: string,
    fechaTurno: string,
    reservado: boolean
}
export type ReservasContextType = {
    turnosReservados: TurnoReservadoType[],
    date: string, 
    service: string, 
    time: string, 
    progreso: number, 
    turns: TurnosJSON[],
    saveReservation: (idTurno: TurnosJSON['id']) => void,
    setTurns: Dispatch<SetStateAction<TurnosJSON[]>>,
    setTurnosReservados: Dispatch<SetStateAction<TurnoReservadoType[]>>,
    setDate: Dispatch<SetStateAction<string>>, 
    setService: Dispatch<SetStateAction<string>>, 
    setTime: Dispatch<SetStateAction<string>>, 
    setProgreso: Dispatch<SetStateAction<number>>,
    cancelTurn: (id: TurnoReservadoType['id'])=> void,
    createTurn: () => void,
}