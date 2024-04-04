import { Dispatch, SetStateAction } from "react"

export type ServiciosType = {
    tituloServicio: string,
    descripcionServicio: string
}

export type CategoriaType = {
    titulo: string,
    servicios: ServiciosType[]
}

export type TurnoReservadoType = {
    fecha: string,
    hora: string,
    servicio: string
}

export type ReservasContextType = {
    turnosReservados: TurnoReservadoType[],
    setTurnosReservados: Dispatch<SetStateAction<TurnoReservadoType[]>>
}