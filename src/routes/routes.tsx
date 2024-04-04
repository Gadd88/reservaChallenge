import { createBrowserRouter } from "react-router-dom";
import { Home, MisReservas, Reservas } from "../views";
import { Root } from "./Root";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Root/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path:'/reservas',
                element: <Reservas/>
            },
            {
                path:'/misreservas',
                element: <MisReservas/>
            }
        ]
    },
]) 