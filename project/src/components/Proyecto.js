import { useParams } from "react-router-dom";
import { trabajos } from "../data/trabajos";
import { useEffect, useState } from "react";

const Proyecto = () => {

    const [proyecto, setProyecto] = useState({})
    const params = useParams();

    useEffect(() => {
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
        setProyecto(proyecto[0])
    }, [])

    return(
        <div className="page">
            <h1 className="heading"> { params.nombre } </h1>
            <p> { proyecto.nombre } </p>
        </div>
    )
}

export default Proyecto;