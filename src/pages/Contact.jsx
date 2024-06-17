import React, { useState, useEffect } from 'react';
import CRUDTable from '../components/CRUDTable';

function Contact() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('users')) || [];
    setData(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(data));
  }, [data]);

  return (
    <div className="container">
      <h1>Usuarios</h1>
      <CRUDTable
        data={data}
        setData={setData}
        fields={{ 
          name: '', 
          apellido: '', 
          telefono: '', 
          direccion: '' 
        }}
        placeholder={{ 
          name: 'Nombre', 
          apellido: 'Apellido', 
          telefono: 'Teléfono', 
          direccion: 'Dirección' 
        }}
      />
    </div>
  );
}

export default Contact;
