import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {router} from './router/'
import { AuthProvider } from './auth/AuthProvider'
import { ViajeProvider } from './user/context/ViajeProvider'
import {
  RouterProvider
} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ViajeProvider>
        <RouterProvider router={router}/>
      </ViajeProvider>
    </AuthProvider>
  </React.StrictMode>,
)
