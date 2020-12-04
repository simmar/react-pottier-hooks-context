import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import Context from '../Context';

const BookList = (props) => {
  const context = useContext(Context);
  const [data, setData] = useState([]);
  const search = context.search;
  const caddy = context.caddy;
  const {count, setCount} = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://henri-potier.xebia.fr/books');
      setData(result.data);
      context.books = result.data;
    };

    fetchData();
  }, [context.books]);

  useEffect(() => {
    context.caddy = caddy;
  });

  const onCaddyAdded = (book) => {
    const bookExists = caddy.find((item) => item.isbn === book.isbn);

    if (bookExists) {
      bookExists.quantity++;
    } else {
      book.quantity = 1;
      caddy.push(book);
    }
    localStorage.setItem('caddy', JSON.stringify(caddy));

    console.log('caddy booklist', caddy);
  };

  return (
    <div className="columns is-multiline">
      {<div>Caddy {count}</div>}
      {data
        .filter((item) => {
          return item.title.toLowerCase().includes(search.toLowerCase());
        })
        .map((book) => {
          return (
            <div className="column is-one-quarter" key={book.isbn}>
              <div className="book-title">{book.title}</div>
              <img src={book.cover} alt={book.title} />
              <div>{book.price} €</div>
              <button
                onClick={() => {
                  onCaddyAdded(book);
                  setCount(count + 1);
                }}
              >
                Ajouter au panier
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default BookList;
