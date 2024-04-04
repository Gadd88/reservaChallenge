import { ReactNode, createContext, useState } from "react"

type TurnoReservadoType = {
    fecha: string,
    hora: string,
    servicio: string
}
type ReservasProviderType = {
    children: ReactNode
}
type ReservasContext = {
    turnosReservado: TurnoReservadoType,
    setTurnosReservado: (arg: TurnoReservadoType) => void
}

export const ReservasContext = createContext({})

export const ReservasProvider = ({children}: ReservasProviderType) => {

    const [turnosReservados, setTurnosReservados] = useState<TurnoReservadoType[]>()

    return (
        <ReservasContext.Provider value={{
            turnosReservados,
            setTurnosReservados
        }}>
            {children}
        </ReservasContext.Provider>
    )
}