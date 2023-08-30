import { NavLink } from "react-router-dom";

const NotFound = () =>{
    return(
        <>
            <h1 className="titleNotFound"> Pagina no encontrada </h1>
            <NavLink to="/inicio" className="linkNotFound"> Volver al Inicio </NavLink>
        </>
    )
}

export default NotFound;