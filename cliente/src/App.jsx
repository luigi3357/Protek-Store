import './App.css';
/////////// PROVIDERS ///////////////

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookie from 'js-cookie'

/////////// PROVIDERS FIN ///////////////

//////////////////////////////// RUTAS ///////////////////////////////////////

////home////
import Index from './componentes/Index/index'
import Login from './componentes/login/login';
import Register from './componentes/Register/Register';
import Shopingcart from './componentes/shopingcart/Shopingcart';


//////////////////////////////// RUTAS FIN ///////////////////////////////////////


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Shopingcart />} />
      </Routes>
    </Router>
  );
}

export default App;