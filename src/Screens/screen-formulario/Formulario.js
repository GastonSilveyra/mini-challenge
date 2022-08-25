import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Formulario.css'

const defaultValues = { name: "", lastName: "" };

function Tabla() {
    const [datosForm, setDatosTabla] = useState(defaultValues);
    useEffect(() => {
        return ()=>{
            setDatosTabla(defaultValues)
          }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(datosForm)
    };
    const handleChange = (e) => {
        let newDatosForm = {...datosForm};
        let key = e.target.id;
        newDatosForm[key] = e.target.value;
        setDatosTabla(newDatosForm)
    };

    return (
        <div className='formulario'>
            <h2 className='formulario-title'>Formulario</h2>
            <form onSubmit={handleSubmit} className="form">
                <label>
                    Nombre:
                    <input type="text" id='name' value={datosForm.name} onChange={handleChange} />
                </label>
                <label>
                    Apellido:
                    <input type="text" id='lastName' value={datosForm.lastName} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <Link to="/">
                Volver
            </Link>
        </div>
    );
}

export default Tabla;