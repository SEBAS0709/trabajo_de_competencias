
import './App.css';
import {Routes, Route} from "react-router-dom"

import Navegacion from "./components/Navegacion";
import CrearUsuarios from './components/CrearUsuarios';
import ListaUsuarios from "./components/ListaUsuario";

function App() {
  return (
    <div className="">
      <Navegacion/>
      <div className='container p-4'>
        <Routes>
          <Route path='/' element={<ListaUsuarios/>}/>
          <Route path='/CrearUsuario' element={<CrearUsuarios/>}/>
          <Route path='/edit/:id' element={<CrearUsuarios/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
