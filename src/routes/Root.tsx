import { Outlet } from "react-router-dom"
import { Nav } from "../components/"
import { ToastContainer } from "react-toastify"
import 'react-toastify/ReactToastify.css'

export const Root = () => {
  return (
    <div className="w-full lg:max-w-[1000px] flex items-center justify-between flex-col mx-auto h-[100dvh] min-h-[900px] gap-5 p-5 mb-10 relative">
        <Nav />
        <ToastContainer closeOnClick autoClose={1000}/>
        <Outlet/>
    </div>
  )
}
