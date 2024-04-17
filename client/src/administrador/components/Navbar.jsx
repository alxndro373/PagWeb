import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <>
        <div>
        <h1 className='bg-dark-subtle text-light text-center mb-0' data-bs-theme="dark">Administracion: Centro de Autobuses ADU</h1>
        </div>
        <nav className="navbar bg-dark" data-bs-theme="dark" >
            <ul className="nav">
                <li className="nav-item ">
                    <Link className="nav-link text-body" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-body" to="/administradorAutobus">Autobuses</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-body" to="/newViaje">Viajes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-body" to="/administradorCuidad">Cuidades</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-body" to="/newUsuario">Usuario</Link>
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