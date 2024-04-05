import React, { ReactNode } from "react"
import logo from '../../assets/manicura.png'

export const Home:React.FC = ():ReactNode => {
  return (
    <div className="h-full w-[99%] max-w-[99%] min-h-96 flex flex-col items-center justify-start gap-5 flex-wrap">
        <h1 className="text-start me-auto">Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil quia odit, accusantium nesciunt voluptatum vero adipisci eveniet esse culpa cupiditate.</p>
        <figure className="rounded-full p-14 bg-pink-200 flex justify-center items-center">
          <img src={logo} alt="logo manicura" width={200}/>
        </figure>
    </div>
  )
}
