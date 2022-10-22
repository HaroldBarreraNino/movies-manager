import Parse from "parse";
import { useEffect, useState } from "react";

function User({ id }) {

    const [ide, setIde] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");

    useEffect(() => {

        const getUser = async () => {
            const query = new Parse.Query(Parse.User);
            query.equalTo("objectId", id);
            const result = await query.find();

            setIde(id);
            setNombre(result[0].get("nombre"));
            setApellido(result[0].get("apellido"));
            setEmail(result[0].get("email"));
            setUsername(result[0].get("username"));
        }

        getUser();

    }, [])



    return (
        <div className="container-card">
            <h4>{ide}</h4>
            <ul>
                <li id="titleitem">{nombre}</li>
                <li>APELLIDO: {apellido}</li>
                <li>EMAIL: {email}</li>
                <li>NOMBRE DE USUARIO: {username}</li>
            </ul>
            <div className="container-center">
                <button className="btn-primary">ELIMINAR</button>
                <button className="btn-secondary">EDITAR</button>
            </div>
        </div>
    );
}

export default User;