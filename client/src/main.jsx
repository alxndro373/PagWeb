import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import { CuidadesForm } from './administrador/pages/CuidadesForm.jsx'
import { AutobusesForm } from './administrador/pages/AutobusesForm.jsx'
import ErrorPage  from './pages/ErrorPage.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "administradorCuidad",
    element: <CuidadesForm />,
  },
  {
    path: "administradorAutobus",
    element: <AutobusesForm />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
