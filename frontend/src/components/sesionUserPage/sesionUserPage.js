import Navbar from "../navbarComponent/navbar";
import { Link, useNavigate } from "react-router-dom";
import Parse from 'parse';

const SesionUserPage = () => {

    const navigate = useNavigate();
    let currentUser = Parse.User.current();

    const SignOut = () => {
        Parse.User.logOut().then(() => {
            navigate('/', {replace: true});
        });
    }

    return (
        <>
            <h1>BIENVENIDO USUARIO</h1>
            <Navbar />
            <button className="btn-primary" onClick={() => { SignOut() }}>CERRAR SESION</button>
        </>
    );
}

export default SesionUserPage;