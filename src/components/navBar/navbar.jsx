import React from "react";

const Navbar = () => {
    return (
        <nav className="navBar">
            <a href="#" className="logo"><p>AFRODITA</p></a>
            <ul className="navBarMenu">
                <li><a href="#" className="links">Inicio</a></li>
                <li><a href="#" className="links">Productos</a></li>
                <li><a href="#" className="links">Contacto</a></li>
            </ul>
        </nav>
    )
}
export default Navbar