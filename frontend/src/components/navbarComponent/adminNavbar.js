import { Link, useNavigate } from "react-router-dom";
import Parse from 'parse';

const AdminNavbar = () => {

    const navigate = useNavigate();

    const SignOut = () => {
        Parse.User.logOut().then(() => {
            navigate('/', { replace: true });
        });
    }

    return (
        <>
            <button className="btn-primary" onClick={() => { SignOut() }}>CERRAR SESION</button>
            <header>
                <h1>MODO ADMINISTRADOR</h1>
            </header>
            <nav>
                <ul>
                    <li>
                        <Link to='/usercrud' className="btn-secondary">TABLA USUARIOS</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/moviecrud' className="btn-secondary">TABLA PELICULAS</Link>
                    </li>
                </ul>
            </nav>
            <div className='clearfix'></div>
        </>
    );
}

export default AdminNavbar;