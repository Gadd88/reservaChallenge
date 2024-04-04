import { Outlet } from "react-router-dom"
import { Nav } from "../components/"

export const Root = () => {
  return (
    <div className="w-full lg:max-w-[1000px] flex items-center justify-between flex-col mx-auto h-[100dvh] overflow-scroll">
        <Outlet/>
        <Nav />
    </div>
  )
}