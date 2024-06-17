import React, { useState } from 'react';

function CRUDTable({ data, setData, fields, placeholder }) {
  const [form, setForm] = useState(fields);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOrEdit = () => {
    if (editId !== null) {
      const updatedData = data.map((item) => (item.id === editId ? { ...form, id: editId } : item));
      setData(updatedData);
      setEditId(null);
    } else {
      const newData = { ...form, id: Date.now() };
      setData([...data, newData]);
    }
    setForm(fields);
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditId(item.id);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="form-container">
        {Object.keys(fields).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            placeholder={placeholder[key]}
            value={form[key]}
            onChange={handleChange}
          />
        ))}
        <button onClick={handleAddOrEdit}>{editId !== null ? 'Actualizar' : 'Agregar'}</button>
      </div>
      <table>
        <thead>
          <tr>
            {Object.keys(fields).map((key) => (
              <th key={key}>{placeholder[key]}</th>
            ))}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {Object.keys(fields).map((key) => (
                <td key={key}>{item[key]}</td>
              ))}
              <td className="table-actions">
                <button className="edit" onClick={() => handleEdit(item)}>Editar</button>
                <button className="delete" onClick={() => handleDelete(item.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CRUDTable;
