import { Link } from "react-router-dom"
import logo from "../assets/ADU.png"

const Nav = () => {
    return (
        <>
        
        <nav className="navbar h-25" style={
            {background: "linear-gradient(rgba(106, 164, 211, 0.948) ,rgb(253, 248, 248))",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"}} >
            
            <ul className="nav d-flex align-items-center ">
            <img src={logo} alt="" style={{width:150, height: "60px", objectFit:"cover"} } />
                <li className="nav-item me-5">
                    <Link className="nav-link text-body" to="/">Inicio</Link>
                </li>
                <li className="nav-item me-5">
                    <Link className="nav-link text-body" to="/administradorAutobus">Autobuses</Link>
                </li>
                <li className="nav-item me-5">
                    <Link className="nav-link text-body" to="/administradorViaje">Viajes</Link>
                </li>
                <li className="nav-item me-5">
                    <Link className="nav-link text-body" to="/administradorCuidad">Ciudades</Link>
                </li>
                <li className="nav-item me-5">
                    <Link className="nav-link text-body" to="/administradorUsuario">Usuarios</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-body" to="/newCompra">Compras</Link>
                </li>
            </ul>
            
        </nav>
        </>
    )
}

export default Nav