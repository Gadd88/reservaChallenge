import { Outlet } from "react-router-dom"
import { Nav } from "../components/"

export const Root = () => {
  return (
    <div className="w-full lg:max-w-[1000px] flex items-center justify-between flex-col mx-auto h-screen gap-5 overflow-auto p-5 mb-10">
        <Nav />
        <Outlet/>
    </div>
  )
}
