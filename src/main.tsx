import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes.tsx'
import { ReservasProvider } from './context/ReservasContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReservasProvider>
      <RouterProvider router={routes}/>
    </ReservasProvider>
  </React.StrictMode>,
)
