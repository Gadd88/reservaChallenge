import turnos from '../../db/db.json'

type Props = {
    date: string
    handleHora: (arg:string )=>void
}

export const Turnos = ({date, handleHora}: Props) => {

    const getDate = (date:string) => {
        const array = date.split('/').reverse()
        const newdate = array.map(date => {
            if(date.length < 2) return `0${date}`
            return date
        })
        return newdate.join('-')
    }
    
    const dateSelected = getDate(date)


    const dateSelectedTurns = turnos.filter(turno => turno.fechaTurno == dateSelected)

    
  return (
    <div className='grid grid-cols-2'>
        {
            dateSelectedTurns.length < 1 && <p className='p-2 bg-yellow-300 rounded-md font-semibold my-2'>No hay turnos para la fecha seleccionada</p>
        }
        {
            dateSelectedTurns.map(turno => (
                <label
                    className='border-2 rounded-md p-4 flex items-center justify-center w-32 mt-5 gap-5 relative font-semibold' 
                    htmlFor={turno.horaTurno} 
                    key={turno.horaTurno}> {turno.horaTurno}
                    <input type="radio" name="turno" id={turno.horaTurno} value={turno.horaTurno} disabled={turno.reservado ? true : false} onClick={()=>handleHora(turno.horaTurno)}/>
                    {
                        turno.reservado && 
                    <div className='absolute p-1 bg-red-400 -rotate-12 -right-2 text-sm top-4 rounded-md'>Reservado</div>
                    }
                </label>
            ))
        }
    </div>
  )
}
