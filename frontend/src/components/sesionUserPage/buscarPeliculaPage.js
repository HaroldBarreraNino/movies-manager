import Navbar from "../navbarComponent/userNavbar";
import { useState, useEffect } from "react";
import Pelicula from "./pelicula";
import Parse from "parse";

const BuscarPeliculaPage = () => {

    const [nombrePelicula, setNombrePelicula] = useState("");
    const [idPelicula, setIdPelicula] = useState("");

    const buscarPelicula = async() => {
        const Pelicula = Parse.Object.extend("pelicula");
        const query = new Parse.Query(Pelicula);
        query.equalTo("titulo", nombrePelicula);
        const results = await query.find();
        alert("¡Pelicula encontrada! " + results[0].get('titulo'));
        setIdPelicula(results[0].id);
    }

    return (
        <>
            <Navbar />
            <div className="container-center">
                <input className="form-control" value={nombrePelicula} onChange={(e) => (setNombrePelicula(e.target.value))} />
                <button className="btn-primary" onClick={() => { buscarPelicula() }}>BUSCAR</button>
            </div>
            <Pelicula id={idPelicula} />
        </>
    );
}
export default BuscarPeliculaPage;