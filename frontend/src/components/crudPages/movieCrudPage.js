import AdminNavbar from "../navbarComponent/adminNavbar";
import Parse from "parse";
import { useState, useEffect } from "react";
import Movie from "./movie";
import { useNavigate } from "react-router-dom";

const MovieCrudPage = () => {

    const [datapeliculas, setdatapeliculas] = useState([]);
    const peliculasarray = new Array();
    const navigate = useNavigate();

    useEffect(() => {

        const getPeliculas = async () => {
            const Pelicula = Parse.Object.extend("pelicula");
            const query = new Parse.Query(Pelicula);
            const results = await query.find();
            //setdatausuarios(results.data);
            alert("Successfully retrieved " + results.length + " scores.");
            for (let i = 0; i < results.length; i++) {
                const object = results[i];
                console.log(object.id + ' - ' + object.get('titulo'));
                peliculasarray.push(object.id);
            }
            console.log(peliculasarray);
            setdatapeliculas(peliculasarray);
            console.log("Data peliculas: " + peliculasarray);
        }

        getPeliculas();

    }, []);

    const listpeliculas = datapeliculas.map(pelicula => {
        return (
            <div>
                <Movie id={pelicula} />
            </div>
        );
    });

    const goCreateMovie = () => {
        navigate('/createmovie', { replace: true });
    }

    return (
        <>
            <AdminNavbar />
            <div className="container-center">
                <button className="btn-primary" onClick={() => { goCreateMovie() }}>CREAR PELICULA</button>
            </div>
            <header>
                <h1>PELICULAS</h1>
            </header>
            {listpeliculas}
        </>
    );
}

export default MovieCrudPage;