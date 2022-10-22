import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/login' className="routelink">INICIA SESION</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/register' className="routelink">REGISTRARSE</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/' className="routelink">HOME</Link>
                    </li>
                </ul>
            </nav>
            <div className='clearfix'></div>
        </>
    );
}

export default Navbar;