import Parse from "parse";
import { useEffect, useState } from "react";

function Movie({ id }) {

    const [ide, setIde] = useState("");
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [sinopsis, setSinopsis] = useState("");
    const [imagen, setImagen] = useState("");
    const [trailer, setTrailer] = useState("");

    useEffect(() => {

        const getMovie = async () => {
            const Pelicula = Parse.Object.extend("pelicula");
            const query = new Parse.Query(Pelicula);
            query.equalTo("objectId", id);
            const result = await query.find();

            setIde(id);
            setTitulo(result[0].get("titulo"));
            setCategoria(result[0].get("categoria"));
            setSinopsis(result[0].get("sinopsis"));
            setImagen(result[0].get("imagen"));
            setTrailer(result[0].get("trailer"));
        }

        getMovie();

    }, [])



    return (
        <div className="container-card">
            <div className="container-center">
                <h4>{ide}</h4>
                <ul>
                    <li id="titleitem">{titulo}</li>
                    <li>CATEGORIA: {categoria}</li>
                    <li>
                        <img src={imagen} />
                    </li>
                    <li>Sinopsis:
                        <p>{sinopsis}</p>
                    </li>
                    <li>
                        <iframe width="560" height="315" src={trailer} frameborder="0" allowfullscreen></iframe>
                    </li>
                </ul>
            </div>
            <div className="container-center">
                <button className="btn-primary">ELIMINAR</button>
                <button className="btn-secondary">EDITAR</button>
            </div>
        </div>
    );
}

export default Movie;