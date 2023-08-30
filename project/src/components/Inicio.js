import { Link } from "react-router-dom";
import ListadoTrabajos from "./ListadoTrabajos";

const Inicio = () => {
  return (
    <div className="home">
      <h1>
        Hola, soy Jhon Sebastian Mosquera Ocampo y me encanta el <strong> desarrollo web. </strong> Soy consciente que con <strong> disciplina y perseverancia </strong>, alcanzo a realizar un excelente trabajo.
      </h1>
      <h2 className="title"> Estoy dispuesto a colaborar en cualquier proyecto donde necesites diseños web. <Link to="/contacto">Contacta conmigo  </Link> </h2>
      <section className="last-works">
        <h2 className="heading"> Algunos de mis proyectos </h2>
        <p> Estos son algunos de mis trabajos de desarrollo web. </p>
        <div className="works">
          <ListadoTrabajos limite="2"/>
        </div>
      </section>
    </div>
  )
}

export default Inicio;