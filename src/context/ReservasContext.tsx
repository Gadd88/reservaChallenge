import { createContext, useState } from "react"
import { ReservasContextType, TurnoReservadoType } from "../types/categorias"



export const ReservasContext = createContext<ReservasContextType>({} as ReservasContextType)

export const ReservasProvider:React.FC<{children: React.ReactNode}> = ({children}) => {

    const [turnosReservados, setTurnosReservados] = useState<TurnoReservadoType[]>([{
        servicio:'',
        fecha:'',
        hora:''
    }])

    return (
        <ReservasContext.Provider value={{turnosReservados, setTurnosReservados}}>
            {children}
        </ReservasContext.Provider>
    )
}