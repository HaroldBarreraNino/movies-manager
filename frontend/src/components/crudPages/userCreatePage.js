import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Parse from 'parse';

const UserCreatePage = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const regUser = async() => {
       
        const user = new Parse.User();
        user.set("nombre", nombre);
        user.set("apellido", apellido);
        user.set("username", username);
        user.set("password", password);
        user.set("email", correo);
        
        try {
            await user.signUp();
            navigate('/usercrud', {replace: true});
            alert("¡Usuario creado con exito!");
            // Hooray! Let them use the app now.
        } catch (error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
        }

    }

    return (
        <>
            <main className="container">
                <h1 className="titlePage">CREAR USUARIO</h1>
                <hr />
                <div className="form">
                    <div class="form-group">
                        <label for="nombre">Nombre:</label>
                        <input type="text" value={nombre} onChange={(e) => (setNombre(e.target.value))} class="form-control" id="nombre" placeholder="Digite su nombre" />
                    </div>
                    <div class="form-group">
                        <label for="apellido">Apellido:</label>
                        <input type="text" value={apellido} onChange={(e) => (setApellido(e.target.value))} class="form-control" id="apellido" placeholder="Digite su apellido" />
                    </div>
                    <div class="form-group">
                        <label for="correo">Correo electronico:</label>
                        <input type="email" value={correo} onChange={(e) => (setCorreo(e.target.value))} class="form-control" id="correo" placeholder="Digite su correo electronico" />
                    </div>
                    <div class="form-group">
                        <label for="username">Nombre de usuario:</label>
                        <input type="text" value={username} onChange={(e) => (setUsername(e.target.value))} class="form-control" id="username" placeholder="Digite un nombre de usuario" />
                    </div>
                    <div class="form-group">
                        <label for="password">Clave:</label>
                        <input type="password" value={password} onChange={(e) => (setPassword(e.target.value))} class="form-control" id="password" placeholder="Clave" />
                    </div>
                    <div className="container-center">
                        <button onClick={() => regUser()} type="submit" class="btn btn-primary">CREAR USUARIO</button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default UserCreatePage;