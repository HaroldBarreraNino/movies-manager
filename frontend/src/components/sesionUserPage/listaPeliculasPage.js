import Parse from "parse";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbarComponent/userNavbar";
import Pelicula from "./pelicula";

const ListaPeliculasPage = () => {

    const [datapeliculas, setdatapeliculas] = useState([]);
    const peliculasarray = new Array();
    const navigate = useNavigate();

    useEffect(() => {

        const getPeliculas = async () => {
            const Pelicula = Parse.Object.extend("pelicula");
            const query = new Parse.Query(Pelicula);
            const results = await query.find();
            for (let i = 0; i < results.length; i++) {
                const object = results[i];
                peliculasarray.push(object.id);
            }
            setdatapeliculas(peliculasarray);
        }

        getPeliculas();

    }, []);

    const listpeliculas = datapeliculas.map(pelicula => {
        return (
            <div>
                <Pelicula id={pelicula} />
            </div>
        );
    });

    return (
        <>
            <Navbar />
            {listpeliculas}
        </>
    );
}

export default ListaPeliculasPage;