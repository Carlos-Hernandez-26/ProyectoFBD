import React, { useState, useEffect } from 'react';
import CRUDTable from '../components/CRUDTable';

function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('suppliers')) || [];
    setData(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem('suppliers', JSON.stringify(data));
  }, [data]);

  return (
    <div className="container">
      <h1>Proveedores</h1>
      <CRUDTable
        data={data}
        setData={setData}
        fields={{ 
          name: '', 
          apellido: '', 
          telefono: '', 
          correo: '', 
          direccion: '' 
        }}
        placeholder={{ 
          name: 'Nombre', 
          apellido: 'Apellido', 
          telefono: 'Teléfono', 
          correo: 'Correo Electrónico', 
          direccion: 'Dirección' 
        }}
      />
    </div>
  );
}

export default About;
