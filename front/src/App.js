import logo from './logo.svg';
import './App.css';
import Ejemplo from './Ejemplo';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import Registro from './Registro2';
import Login from './Login';
import Imagenes from './Imagenes';
import PantallaPrincipal from './PantallaPrincipal';
import Dashboardsinlogin2 from '/Dashboardsinlogin2'
import PerfilUsuario from './PerfilUsuario';

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to="/Login" />} />
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Registro' element={<Registro/>}></Route>
      <Route path='/Imagenes' element={<Imagenes/>}></Route>
      <Route path='/PantallaPrincipal' element={<PantallaPrincipal/>}></Route>
      <Route path='/Dashboardsinlogin' element={<Dashboardsinlogin2/>}></Route>
       
      <Route path='/PerfilUsuario' element={<PerfilUsuario/>}></Route> 
    </Routes>
    
    </BrowserRouter>
  )
  }
  



export default App;
