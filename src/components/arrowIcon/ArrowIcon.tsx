import React, { ReactNode } from 'react'
import arrow from '../../assets/arrow.svg'

type Props = {
  className: string
}

export const ArrowIcon:React.FC<Props> = ({className}):ReactNode => {
  return (
    <figure>
        <img 
          className={className}
          src={arrow} alt='arrow icon' width={10} height={10}/>
    </figure>
  )
}
