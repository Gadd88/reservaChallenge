import { Outlet } from "react-router-dom"
import { Nav } from "../components/"

export const Root = () => {
  return (
    <div>
        <Outlet/>
        <Nav />
    </div>
  )
}
