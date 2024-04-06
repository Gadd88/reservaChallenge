import { NavLink } from "react-router-dom"

export const Nav = () => {
  return (
    <nav className="mt-2 flex justify-center items-center gap-2 w-[99%] max-w-[99%]">
        <NavLink className='rounded-md p-3 bg-pink-500 text-white text-sm' to='/'>Home</NavLink>
        <NavLink className='rounded-md p-3 bg-pink-500 text-white text-sm' to='/reservas'>Reservar</NavLink>
        <NavLink role="link" className='rounded-md p-3 bg-pink-500 text-white text-sm' to='/misreservas'>Mis Reservas</NavLink>
    </nav>
  )
}
