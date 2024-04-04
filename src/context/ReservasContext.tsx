import { ReactNode, createContext, useState } from "react"
import { ReservasContext, TurnoReservadoType } from "../types/categorias"



export const ReservasContext = createContext<ReservasContext | null>(null)

export const ReservasProvider:React.FC<{children: React.ReactNode}> = ({children}) => {

    const [turnosReservados, setTurnosReservados] = useState<TurnoReservadoType[]>()

    return (
        <ReservasContext.Provider value={{turnosReservados, setTurnosReservados}}>
            {children}
        </ReservasContext.Provider>
    )
}