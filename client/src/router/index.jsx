import { createBrowserRouter } from "react-router-dom";
import { Autobuses } from "../administrador/pages/Autobuses";
import { Cuidades } from "../administrador/pages/Cuidades";
import { Usuario } from "../administrador/pages/Usuario";
import { Viajes } from "../administrador/pages/Viajes";
import { Boletos } from "../administrador/pages/Boleto";
import { Terminales } from "../administrador/pages/Terminales";
import ErrorPage from '../pages/ErrorPage'
import { Register } from "../user/pages/Register";
import { Login } from "../user/pages/Login";
import { Home } from "../user/pages/Home";
import {HomeAdmin} from "../administrador/pages/Home"
import { Faq } from "../user/pages/Faq"
import { ProtectedRoute } from "../administrador/routes/ProtectedRoute";
import { Terminal } from "../user/pages/Terminal";
import { Viaje } from "../user/pages/Viaje";
import { Asiento } from "../user/pages/Asiento";
import {Boleto} from "../user/pages/Boletos"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "Terminal",
        element: <Terminal />
    },
    {
        path: "Atencion",
        element: <Faq />
    },
    {
        path: "Login",
        element: <Login />
    },
    {
        path: "Register",
        element: <Register />
    },
    {
        path: "Boletos",
        element: < Boleto />
    },
    {
        path:"Viajes/:origen/:destino",
        element: <Viaje />
    },
    {
        path:"Viajes/:origen/:destino/Asientos",
        element: <Asiento />
    },
    {
        path: "/administrador",
        element: <ProtectedRoute />,
        children: [
            {
                path: "/administrador",
                element: <HomeAdmin />,
            },
            {
                path: "/administrador/cuidad",
                element: <Cuidades />,
            },
            {
                path: "/administrador/autobus",
                element: <Autobuses />
            },
            {
                path: "/administrador/usuario",
                element: <Usuario />
            },
            {
                path: "/administrador/terminales",
                element: <Terminales />
            },
            {
                path: "/administrador/viaje",
                element: <Viajes />
            },
            {
                path: "/administrador/boleto",
                element: < Boletos />
            },
        ]
    },

])