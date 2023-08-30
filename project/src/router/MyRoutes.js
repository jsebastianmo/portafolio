import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Inicio from "../components/Inicio";
import Portafolio from "../components/Portafolio";
import Contacto from "../components/Contacto";
import Servicios from "../components/Servicios";
import Curriculum from "../components/Curriculum";
import NotFound from "../components/NotFound";
import HeaderNav from "../components/layout/HeaderNav";
import Footer from "../components/layout/Footer";
import Proyecto from "../components/Proyecto";

const MyRoutes = () =>{
    return(
        <BrowserRouter>

            <HeaderNav />
            
            <section className="content">
                <Routes>
                    <Route path="/" element = { <Navigate to="/inicio" /> } />
                    <Route path="/inicio" element = { <Inicio /> } />
                    <Route path="/portafolio" element = { <Portafolio /> } />
                    <Route path="/contacto" element = { <Contacto /> } />
                    <Route path="/servicios" element = { <Servicios /> } />
                    <Route path="/curriculum" element = { <Curriculum /> } />
                    <Route path="/portafolio/proyecto/:id" element = { <Proyecto /> } />
                    <Route path="/*" element = { <NotFound /> } />
                </Routes>
            </section>

            <Footer />
        </BrowserRouter>
    )
}

export default MyRoutes;