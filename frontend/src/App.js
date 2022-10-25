import './App.css';
import LoginPage from './components/loginPage/loginPage';
import RegisterPage from './components/registerPage/registerPage';
import HomePage from './components/homePage/homePage';
import SesionAdminPage from './components/sesionAdminPage/sesionAdminPage';
import SesionUserPage from './components/sesionUserPage/sesionUserPage';
import UserCrudPage from './components/crudPages/userCrudPage';
import MovieCrudPage from './components/crudPages/movieCrudPage';
import UserCreatePage from './components/crudPages/userCreatePage';
import MovieCreatePage from './components/crudPages/movieCreatePage';
import ListaPeliculasPage from './components/sesionUserPage/listaPeliculasPage';
import BuscarPeliculaPage from './components/sesionUserPage/buscarPeliculaPage';
import GaleryPage from './components/galeryPage/galeryPage';

import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      
      <Routes>

        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/sesionuser' element={<SesionUserPage />}/>
        <Route path='/sesionadmin' element={<SesionAdminPage />}/>
        <Route path='/usercrud' element={<UserCrudPage />}/>
        <Route path='/moviecrud' element={<MovieCrudPage />}/>
        <Route path='/createuser' element={<UserCreatePage />}/>
        <Route path='/createmovie' element={<MovieCreatePage />}/>
        <Route path='/listapeliculas' element={<ListaPeliculasPage />}/>
        <Route path='/buscarpeliculas' element={<BuscarPeliculaPage />}/>
        <Route path='/usergaleria' element={<GaleryPage />}/>
        
      </Routes>

    </div>
  );
}

export default App;
