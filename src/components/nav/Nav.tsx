import { NavLink } from "react-router-dom"

export const Nav = () => {
  return (
    <nav className="mt-10 block">
        <NavLink className='rounded-md p-3 border-2 bg-slate-950 text-white' to='/'>Home</NavLink>
        <NavLink className='rounded-md p-3 border-2 bg-slate-950 text-white' to='/reservas'>Reservar</NavLink>
        <NavLink className='rounded-md p-3 border-2 bg-slate-950 text-white' to='/misreservas'>Mis Reservas</NavLink>
    </nav>
  )
}
