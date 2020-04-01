import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import Context from '../Context';

const BookList = () => {
  const context = useContext (Context);
  const [data, setData] = useState ([]);
  const search = context.search;

  useEffect (() => {
    const fetchData = async () => {
      const result = await axios ('http://henri-potier.xebia.fr/books');
      setData (result.data);
      context.books = result.data;
    };

    fetchData ();
  }, []);

  const onCaddyAdded = item => {
    let items = context.caddy;
    items.push (item);
    context.setCaddy (items);

    // console.log (item, 'item');
    // console.log (items, 'items');
    // console.log (item.isbn, 'item.isbn');
    // console.log (context.caddy, 'context.caddy');
    // console.log (context, 'context');

    // let bookExists = items.find (context.caddy.isbn);
    // console.log (bookExists);

    // if (bookExists) {
    //   item.quantity++;
    //   console.log (item, 'item ++');
    // }
  };

  return (
    <div className="columns is-multiline">
      {data
        .filter (item => {
          return item.title.toLowerCase ().includes (search.toLowerCase ());
        })
        .map (item => {
          return (
            <div className="column is-one-quarter" key={item.isbn}>
              <div className="book-title">{item.title}</div>
              <img src={item.cover} alt={item.title} />
              <div>{item.price} €</div>
              <button
                onClick={() => {
                  onCaddyAdded (item);
                  // console.log (item, 'item');
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
