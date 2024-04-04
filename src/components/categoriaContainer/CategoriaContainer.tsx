import React, { useEffect, useRef, useState } from 'react'
import { CategoriaItem } from '../categoriaItem/CategoriaItem'

interface Props {
    categoria: {
        titulo: string,
        servicios: {
            tituloServicio: string,
            descripcionServicio: string
        }[]
    },
    key: number
}

export const CategoriaContainer = ({categoria, key}: Props) => {
    
  return (

    // <div
    //     key={idx}
    //     isOpen={idx === currentIdx} 
    //     className="w-full border-2 p-2 border-black">
    //     <h3 onClick={()=>handleVisible(idx)}>{categoria.titulo} <span>&#x2B07;</span></h3>
    //     {
    //         isVisible &&
    //         categoria.servicios.map(servicio => (
    //             <CategoriaItem />
    //         ))
    //     }
    // </div>
  )
}
