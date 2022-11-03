import Parse from "parse";
import { useEffect, useState } from "react";
import Comentario from "./comentario";

function Pelicula({ id }) {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [imagen, setImagen] = useState("");
  const [trailer, setTrailer] = useState("");
  const [calificacion, setCalificacion] = useState("");
  const [opinion, setOpinion] = useState("");
	const [datacomentarios, setdatacomentarios] = useState([]);
    const comentariosarray = new Array();


  useEffect(() => {
    const getMovie = async () => {
      const Peli = Parse.Object.extend("pelicula");
      const query = new Parse.Query(Peli);
      query.equalTo("objectId", id);
      const result = await query.find();

      setTitulo(result[0].get("titulo"));
      setCategoria(result[0].get("categoria"));
      setSinopsis(result[0].get("sinopsis"));
      setImagen(result[0].get("imagen"));
      setTrailer(result[0].get("trailer"));
    };

    getMovie();
  }, [id]);

  useEffect(() => {
    const getComentarios = async () => {
      const rates = Parse.Object.extend("calificaciones");
      const query = new Parse.Query(rates);
      query.equalTo("pelicula", id);
      const results = await query.find();
      for (let i = 0; i < results.length; i++) {
        const object = results[i];
        comentariosarray.push(object.id);
      }
      setdatacomentarios(comentariosarray);
    };

    getComentarios();
  }, [id]);

	const listcomentarios = datacomentarios.map(comentario => {
        return (
            <div>
                <Comentario id={comentario} />
            </div>
        );
    });

  const rateMovie = () => {
    const RateObject = Parse.Object.extend("calificaciones");
    const rate = new RateObject();

    rate.set("usuario", Parse.User.current().id);
    rate.set("pelicula", id);
    rate.set("calificacion", calificacion);
    rate.set("opinion", opinion);

    rate.save().then(
      (rate) => {
        alert("¡Gracias! Tu calificacion ha sido enviada.");
      },
      (error) => {
        alert("Error en el sistema, intentelo mas tarde.");
      }
    );
  };

  const addMovieToGallery = () => {
    const galeryObject = Parse.Object.extend("galeria");
    const galeria = new galeryObject();

    galeria.set("usuario", Parse.User.current().id);
    galeria.set("pelicula", id);

    galeria.save().then(
      (galeria) => {
        alert("¡Pelicula agregada a tu galeria!");
      },
      (error) => {
        alert("Error en el sistema, intentelo mas tarde...");
      }
    );
  };

  return (
    <div className="container-card">
      <div className="container-center">
        <ul>
          <li id="titleitem">{titulo}</li>
          <li>CATEGORIA: {categoria}</li>
          <li>
            <img src={imagen} />
          </li>
          <li>
            Sinopsis:
            <p>{sinopsis}</p>
          </li>
          <li>
            <iframe
              width="560"
              height="315"
              src={trailer}
              frameborder="0"
              allowfullscreen
            ></iframe>
          </li>
        </ul>
      </div>
	    <div className="container-center">
		    <h1>COMENTARIOS</h1>
		    {listcomentarios}
	    </div>
      <div className="container-center">
        <input
          list="Calification"
          value={calificacion}
          onChange={(e) => setCalificacion(e.target.value)}
          placeholder="CALIFICACION"
        />
        <datalist id="Calification">
          <option value="1 estrella" />
          <option value="2 estrellas" />
          <option value="3 estrellas" />
          <option value="4 estrellas" />
          <option value="5 estrellas" />
        </datalist>
        <p>Deja tu opinion de la pelicula:</p>
        <textarea
          value={opinion}
          onChange={(e) => setOpinion(e.target.value)}
          rows="4"
          cols="50"
        >
          Deja tu opinion de la pelicula.
        </textarea>
      </div>
      <div className="container-center">
        <button
          className="btn-primary"
          onClick={() => {
            rateMovie();
          }}
        >
          CALIFICAR
        </button>
        <button
          className="btn-secondary"
          onClick={() => {
            addMovieToGallery();
          }}
        >
          AGREGAR A GALERIA
        </button>
      </div>
    </div>
  );
}

export default Pelicula;

