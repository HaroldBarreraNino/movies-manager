import Parse from 'parse';
import Navbar from '../navbarComponent/navbar';

const HomePage = () => {

    return (
        <>
            <header>
                <h1>Movies Manager</h1>
            </header>
            <Navbar />
            <div id='banner'></div>
        </>
    );
}

export default HomePage;