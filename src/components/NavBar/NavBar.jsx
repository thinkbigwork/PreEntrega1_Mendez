import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                {/* Brand */}
                <a href="#" className="navbar-brand">MercadoCoder</a>

                {/* Links */}
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Vehiculos</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Muebles</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Tecnología</a>
                    </li>
                </ul>

                {/* CartWidget */}                
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;