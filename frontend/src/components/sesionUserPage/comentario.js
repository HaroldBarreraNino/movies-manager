import Parse from "parse";
import { useEffect, useState } from "react";

function Comentario({ id }) {
  const [opinion, setOpinion] = useState("");
  const [calificacion, setCalificacion] = useState("");

  useEffect(() => {
    const getCalificacion = async () => {
      const rate = Parse.Object.extend("calificaciones");
      const query = new Parse.Query(rate);
      query.equalTo("objectId", id);
      const result = await query.find();

      setOpinion(result[0].get("opinion"));
      setCalificacion(result[0].get("calificacion"));
      // setSinopsis(result[0].get("sinopsis"));
      // setImagen(result[0].get("imagen"));
      // setTrailer(result[0].get("trailer"));
    };

    getCalificacion();
  }, [id]);

  return (
    <div className="container-card">
      <div className="container-center">
        <ul>
          <li id="titleitem">{opinion}</li>
          <li>CALIFICACION: {calificacion}</li>
        </ul>
      </div>
    </div>
  );
}

export default Comentario;
