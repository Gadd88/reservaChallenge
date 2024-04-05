import { NavLink } from "react-router-dom"

export const Nav = () => {
  return (
    <nav className="mt-5 block flex justify-center items-center gap-5">
        <NavLink className='rounded-md p-3 bg-pink-500 text-white' to='/'>Home</NavLink>
        <NavLink className='rounded-md p-3 bg-pink-500 text-white' to='/reservas'>Reservar</NavLink>
        <NavLink className='rounded-md p-3 bg-pink-500 text-white' to='/misreservas'>Mis Reservas</NavLink>
    </nav>
  )
}
