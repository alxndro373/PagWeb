import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import { Cuidades } from './administrador/pages/Cuidades.jsx'
import { Autobuses } from './administrador/pages/Autobuses.jsx'
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
    element: <Cuidades />,
  },
  {
    path: "administradorAutobus",
    element: <Autobuses />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
