import './App.css';
/////////// PROVIDERS ///////////////

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookie from 'js-cookie'

/////////// PROVIDERS FIN ///////////////

//////////////////////////////// RUTAS ///////////////////////////////////////

////home////
import Index from './componentes/Index/index'


//////////////////////////////// RUTAS FIN ///////////////////////////////////////


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;