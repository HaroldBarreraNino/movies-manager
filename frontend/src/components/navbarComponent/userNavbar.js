import { Link, useNavigate } from "react-router-dom";
import Parse from 'parse';

const AdminNavbar = () => {

    const navigate = useNavigate();
    let currentUser = Parse.User.current();
    const nombreUser = currentUser.get("nombre") + " " + currentUser.get("apellido");

    const SignOut = () => {
        Parse.User.logOut().then(() => {
            navigate('/', { replace: true });
        });
    }

    return (
        <>
            <button className="btn-primary" onClick={() => { SignOut() }}>CERRAR SESION</button>
            <header>
                <h1>BIENVENIDO {nombreUser}</h1>
            </header>
            <nav>
                <ul>
                    <li>
                        <Link to='/listapeliculas' className="btn-secondary">VER PELICULAS</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/buscarpeliculas' className="btn-secondary">BUSCAR PELICULA</Link>
                    </li>
                </ul>
            </nav>
            <div className='clearfix'></div>
        </>
    );
}

export default AdminNavbar;