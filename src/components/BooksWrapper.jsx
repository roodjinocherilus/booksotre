import React from 'react';
import Book from './Book';
import BookForm from './BookForm';

function BooksWrapper() {
  const listOfBooks = [
    {
      name: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
      progress: '8%',
    },
    {
      name: 'Dune',
      author: 'Frank Herbert',
      category: 'Sci-Fi',
      progress: '64%',
    },
    {
      name: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Economy',
      progress: '0%',
    },
  ];

  return (
    <div className="center mt-5">
      {listOfBooks.map((book) => (
        <Book
          key={book.name}
          name={book.name}
          author={book.author}
          category={book.category}
          progress={book.progress}
        />
      ))}
      <BookForm />
    </div>
  );
}

export default BooksWrapper;
