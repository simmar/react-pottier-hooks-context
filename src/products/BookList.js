import axios from 'axios';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {CaddyContext} from '../Context';

const BookList = (props) => {
  const [data, setData] = useState([]);
  const {caddy, search, count, setCount, updateCartItemsCount} = useContext(
    CaddyContext
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://henri-potier.xebia.fr/books');
      setData(result.data);
    };

    fetchData();
  }, []);

  const onCaddyAdded = useCallback(
    (book) => {
      const bookExists = caddy.find((item) => item.isbn === book.isbn);

      if (bookExists) {
        bookExists.quantity++;
        updateCartItemsCount();
      } else {
        book.quantity = 1;
        caddy.push(book);
      }
      //localStorage.setItem('caddy', JSON.stringify(caddy));
    },
    [caddy, count, setCount, updateCartItemsCount]
  );

  return (
    <div className="columns is-multiline">
      {data
        .filter((item) => {
          return item.title.toLowerCase().includes(search.toLowerCase());
        })
        .map((book, index) => {
          return (
            <div className="column is-one-quarter item" key={index}>
              <div className="book-title">{book.title}</div>
              <img src={book.cover} alt={book.title} />
              <div>{book.price} €</div>
              <button
                className="button is-primary"
                onClick={() => {
                  onCaddyAdded(book);
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
