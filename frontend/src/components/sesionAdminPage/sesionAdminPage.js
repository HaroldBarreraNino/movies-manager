import Navbar from "../navbarComponent/adminNavbar";
import { Link, useNavigate } from "react-router-dom";
import Parse from 'parse';

const SesionAdminPage = () => {

    return (
        <>
            <Navbar />
            <div id='adminbanner'></div>
        </>
    );
}

export default SesionAdminPage;