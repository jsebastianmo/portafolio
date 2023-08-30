import { Link } from "react-router-dom";
import { trabajos } from "../data/trabajos";

const ListadoTrabajos = ({limite}) => {
  return (
    <section className="works">
      {
        trabajos.slice(0, limite).map(trabajo => (
          <article key={ trabajo.id } className="work-item">
            <span> { trabajo.categorías } </span>
            <h2> <Link to={'/portafolio/proyecto/' + trabajo.id}> { trabajo.nombre } </Link> </h2>
            <h3> { trabajo.tecnologías } </h3>
          </article>
        ))
      }
    </section>
  )
}

export default ListadoTrabajos;