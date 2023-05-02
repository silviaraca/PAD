import React, { useState } from 'react';

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para realizar la búsqueda de libros con el término searchTern
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchForm;