import './App.css';
import LoginPage from './components/loginPage/loginPage';
import RegisterPage from './components/registerPage/registerPage';
import HomePage from './components/homePage/homePage';
import SesionAdminPage from './components/sesionAdminPage/sesionAdminPage';
import SesionUserPage from './components/sesionUserPage/sesionUserPage';

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
        
      </Routes>

    </div>
  );
}

export default App;