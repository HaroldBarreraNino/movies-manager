import AdminNavbar from "../navbarComponent/adminNavbar";
import Parse from "parse";
import { useState, useEffect } from "react";
import User from "./user";
import { useNavigate } from "react-router-dom";

const UserCrudPage = () => {

    const [datausuarios, setdatausuarios] = useState([]);
    const usuariosarray = new Array();
    const navigate = useNavigate();

    useEffect(() => {

        const getParseUsers = async () => {
            const query = new Parse.Query(Parse.User);
            const results = await query.find();
            //setdatausuarios(results.data);
            alert("Successfully retrieved " + results.length + " scores.");
            for (let i = 0; i < results.length; i++) {
                const object = results[i];
                console.log(object.id + ' - ' + object.get('nombre'));
                usuariosarray.push(object.id);
            }
            console.log(usuariosarray);
            setdatausuarios(usuariosarray);
            console.log("Data usuarios: " + datausuarios);

        }

        getParseUsers();

    }, []);

    const listusuarios = datausuarios.map(usuario => {
        return(
            <div>
                <User id={usuario}/>
            </div>
        );
    });

    const goCreateUser = () => {
        navigate('/createuser', {replace: true});
    }

    return (
        <>
            <AdminNavbar />
            <div className="container-center">
                <button className="btn-primary" onClick={() => {goCreateUser()}}>CREAR USUARIO</button>
            </div>
            <header>
                <h1>USUARIOS</h1>
            </header>
            {listusuarios}
        </>
    );
}

export default UserCrudPage;