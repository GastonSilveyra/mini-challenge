import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import getDataJson from '../../service/getDataJson'

function Tabla() {
  const [datosTabla, setDatosTabla] = useState([]);
  useEffect(() => {
    getDataJson(setDatosTabla)
  }, []);
  return (
    <div className='Tabla'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Nombre</TableCell>
              <TableCell align="right">Edad</TableCell>
              <TableCell align="right">Carrera</TableCell>
              <TableCell align="right">Hobbie</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datosTabla?.map((row) => (
              <TableRow
                key={"tabla"}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{row.nombre}</TableCell>
                <TableCell align="right">{row.edad}</TableCell>
                <TableCell align="right">{row.carrera}</TableCell>
                <TableCell align="right">{row.hobbie}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/">
        Volver
      </Link>
    </div>
  );
}

export default Tabla;