import Parse from "parse";
import { useEffect, useState } from "react";

function User({ id }) {

    const [ide, setIde] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [clave, setClave] = useState("");

    useEffect(() => {

        const getUser = async () => {
            const query = new Parse.Query(Parse.User);
            query.equalTo("objectId", id);
            const result = await query.find();

            /*const queryUser = new Parse.Query(Parse.User);
            query.equalTo("objectId", id);
            const resultUser = await query.find();*/

            console.log(result[0].get("username"));
            setIde(id);
            setNombre(result[0].get("nombre"));
            setApellido(result[0].get("apellido"));
            setEmail(result[0].get("email"));
            setUsername(result[0].get("username"));
            setClave(result[0].get("password"));
        }

        getUser();

    }, [])



    return (
        <div className="container-card">
            <ul>
                <li id="titleitem">{nombre}</li>
                <li>APELLIDO: {apellido}</li>
                <li>EMAIL: {email}</li>
                <li>NOMBRE DE USUARIO: {username}</li>
                <li>CLAVE: {clave}</li>
            </ul>
            <div className="container-center">
                <button className="btn-primary">ELIMINAR</button>
                <button className="btn-secondary">EDITAR</button>
            </div>
        </div>
    );
}

export default User;