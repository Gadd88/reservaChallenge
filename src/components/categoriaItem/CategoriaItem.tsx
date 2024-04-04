import React, { useEffect, useRef, useState } from 'react'
import { CategoriaType, ServiciosType } from '../../types/categorias'

interface Props {
    categoria: CategoriaType,
    handleOpen: (arg:number) => void,
    isOpen: boolean,
    handleService: (arg:string) => void
}

export const CategoriaItem = ({categoria, handleOpen, isOpen, handleService}: Props) => {

    const contentRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)

    useEffect(()=>{
        if(isOpen){
            const contentEl = contentRef.current as HTMLDivElement
            setHeight(contentEl.scrollHeight)
        }else{
            setHeight(0)
        }
    },[isOpen])

  return (
    <div className=''>
        <h2>{categoria.titulo}</h2>
        {
            isOpen &&
            categoria.servicios.map(servicio => (
                <div key={servicio.tituloServicio}>
                    <h4>{servicio.tituloServicio}</h4>
                    <p>{servicio.descripcionServicio}</p>
                    <button
                        onClick={() => handleService(servicio.descripcionServicio)}
                        className="border-2 border-black rounded-none"
                        >
                        Seleccionar
                        </button>
                </div>

            ))
        }
    </div>
  )
}
