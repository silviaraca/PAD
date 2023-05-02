import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import BookList from './components/BookList';
import { searchBooks } from './utils/api';

const App = () => {
  const [books, setBooks] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await searchBooks(searchTerm);
      setBooks(response.data.items);
    } catch (error) {
      console.error('Error buscando libros', error);
    }
  };

  return (
    <div>
      <h1>Buscador de libros</h1>
      <SearchForm onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
};

export default App;
 
