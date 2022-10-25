import Navbar from "../navbarComponent/userNavbar";
import { useState, useEffect } from "react";
import Parse from "parse";
import Pelicula from "../sesionUserPage/pelicula";

const GaleryPage = () => {

    const [datagaleria, setdatagaleria] = useState([]);
    const galeriaarray = new Array();

    useEffect(() => {
        const getGaleria = async () => {
            const Galeria = Parse.Object.extend("galeria");
            const query = new Parse.Query(Galeria);
            query.equalTo("usuario", Parse.User.current().id);
            const results = await query.find();
            for (let i = 0; i < results.length; i++) {
                const object = results[i];
                galeriaarray.push(results[i].get("pelicula"));
            }
            setdatagaleria(galeriaarray);
            console.log(datagaleria);
        }

        getGaleria();
    }, []);

    const listaGaleria = datagaleria.map(pelicula => {
        return (
            <div>
                <Pelicula id={pelicula} />
            </div>
        );
    });

    return(
        <>
        <Navbar />
        {listaGaleria}
        </>
    );
}

export default GaleryPage;