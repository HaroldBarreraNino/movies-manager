import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Parse from 'parse';

const LoginPage = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const logUser = async () => {
        try {
            const user = await Parse.User.logIn(username, password);
            const query = new Parse.Query(Parse.User);
            query.equalTo("username", "admin");
            const result = await query.find();
            const adminkey = result[0].get("username");

            if (adminkey === user.get("username")) {
                navigate('/sesionadmin', { replace: true });
            } else {
                navigate('/sesionuser', { replace: true });
            }
        } catch (error) {
            alert("Nombre de usuario o clave incorrectas...");
        }

        
    };

    return (
        <>
            <main className="container">
                <h1 className="titlePage ">INICIAR SESION</h1>
                <hr />
                <div className="form">
                    <div className="form-group">
                        <label for="logusername">Nombre de usuario</label>
                        <input type="text" value={username} onChange={(e) => (setUsername(e.target.value))} className="form-control" id="logusername" placeholder="Digite su nombre de usuario" />
                    </div>
                    <div className="form-group">
                        <label for="logpassword">Clave</label>
                        <input type="password" value={password} onChange={(e) => (setPassword(e.target.value))} className="form-control" id="logpassword" placeholder="Clave" />
                        <small id="passHelp" className="form-text text-muted">Recuerda no compartir esta clave con nadie.</small>
                    </div>
                    <div className="container-center">
                        <button onClick={() => { logUser() }} className="btn-primary">Iniciar sesion</button>
                    </div>
                    <div className="container-center">
                        <h6>??No tienes una cuenta?</h6><Link to='/register' className="routelink">REGISTRATE AQUI</Link>
                    </div>
                </div>
            </main>
        </>
    );
}

export default LoginPage;