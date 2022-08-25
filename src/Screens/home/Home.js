import React from 'react';
import { Link } from "react-router-dom";
import './Home.css'

function Home() {
    return (
        <div className="Home">
            <header className="Home-header">
                <div>
                    <h3>Challenge</h3>
                </div>
                <div className="Home-buttons">
                    <Link to="Tabla">Tabla</Link>
                    <Link to="formulario">Formulario</Link>
                </div>
            </header>
        </div>
    );
}

export default Home;
