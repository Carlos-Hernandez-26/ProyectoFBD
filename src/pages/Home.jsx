import React, { useState, useEffect } from 'react';
import CRUDTable from '../components/CRUDTable';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('materials')) || [];
    setData(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem('materials', JSON.stringify(data));
  }, [data]);

  return (
    <div className="container">
      <h1>Materiales</h1>
      <CRUDTable
        data={data}
        setData={setData}
        fields={{ 
          name: '', 
          color: '', 
          existencia: '', 
          stockMinimo: '', 
          stockMaximo: '', 
          precio: '', 
          precioVenta: '', 
          precioCompra: '' 
        }}
        placeholder={{ 
          name: 'Nombre', 
          color: 'Color', 
          existencia: 'Existencia', 
          stockMinimo: 'Stock Mínimo', 
          stockMaximo: 'Stock Máximo', 
          precio: 'Precio', 
          precioVenta: 'Precio de Venta', 
          precioCompra: 'Precio de Compra' 
        }}
      />
    </div>
  );
}

export default Home;
