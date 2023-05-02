import React from 'react';

function BookList() {
  // Array de libros a mostrar, puedes reemplazarlo con la lógica de búsqueda y resultados de libros

  const books = [
    { id: 1, title: 'Libro 1', author: 'Autor 1' },
    { id: 2, title: 'Libro 2', author: 'Autor 2' },
    { id: 3, title: 'Libro 3', author: 'Autor 3' },
  ];

  return (
    <div>
      <h2>Resultados de la búsqueda</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;