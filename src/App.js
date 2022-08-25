import React from 'react';
import Home from './Screens/home/Home';
import Tabla from './Screens/screen-tabla/Tabla';
import Formulario from './Screens/screen-formulario/Formulario';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tabla" element={<Tabla />} />
          <Route path="formulario" element={<Formulario />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
