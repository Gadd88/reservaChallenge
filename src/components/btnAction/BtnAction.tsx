import { useReserva } from '../../hooks/useReserva'
import { ArrowIcon } from '../arrowIcon/ArrowIcon'

type BtnProps = {
    type: 'date' | 'time' | 'service' | 'continue'
}

export const BtnAction: React.FC<BtnProps> = ({type}) => {

    const { onClickBtn } = useReserva()

  return (
    <button 
        className={`${type == 'continue' ? 'bg-pink-500 hover:bg-pink-600 text-white': 'bg-pink-50 hover:bg-pink-200'} p-2 w-36 my-10 border-pink-400 font-semibold  border-2 flex items-center justify-center gap-2`}
        onClick={()=>onClickBtn(type)}>
        <ArrowIcon className={`${type == 'continue' ? '-rotate-90': '-rotate-[270deg]'} w-5 object-cover`}/> {type == 'continue' ? 'Continuar' : 'Volver'}
    </button>
  ) 
}
