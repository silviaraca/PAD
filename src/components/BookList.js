import React from 'react';

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.volumeInfo.title}</li>
      ))}
    </ul>
  );
};

export default BookList;
 
