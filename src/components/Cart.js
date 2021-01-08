import React, {useContext} from 'react';
import {CaddyContext} from '../Context';

const Cart = (props) => {
  const {caddy, totalPrice} = useContext(CaddyContext);

  caddy.map((book) => {
    const totalOneBook = book.price * book.quantity;
    totalPrice.push(totalOneBook);
    return null;
  });

  const onDelete = (isbn) => {
    // retirer les objets du panier

    const bookInCart = caddy.find((item) => item.isbn === isbn);
    console.log('bookInCart', bookInCart);

    if (bookInCart) {
      // let cartList = caddy;
      caddy.splice(caddy.indexOf(bookInCart), 1);
    }

    console.log('caddy', caddy);

    //  MAJ le pannier count
    //  MAJ les prix
  };

  return (
    <section className="section">
      <h1>Your cart</h1>
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>
              <abbr title="Product">Product</abbr>
            </th>
            <th>
              <abbr title="title">title</abbr>
            </th>
            <th className="has-text-centered">
              <abbr title="Quantity">Quantity</abbr>
            </th>
            <th className="has-text-centered">
              <abbr title="Price">Unit Price</abbr>
            </th>
            <th className="has-text-centered">
              <abbr title="Total Price">Total Price</abbr>
            </th>
            <th />
          </tr>
        </thead>

        <tfoot>
          <tr>
            <th />
            <th />
            <th />
            <th className="has-text-centered">Total</th>
            <th className="has-text-centered">
              {totalPrice.reduce((a, b) => a + b, 0)} <span></span>
            </th>
            <th className="has-text-centered" />
          </tr>
          <tr>
            <th />
            <th />
            <th />
            <th className="has-text-centered">Reduction</th>
            <th className="has-text-centered">€</th>
            <th className="has-text-centered" />
          </tr>
          <tr>
            <th />
            <th />
            <th />
            <th className="has-text-centered">Total after reduction</th>
            <th className="has-text-centered">€</th>
            <th className="has-text-centered" />
          </tr>
        </tfoot>

        <tbody>
          {caddy.map((book, index) => {
            return (
              <tr key={index}>
                <td>
                  <img src={book.cover} alt={book.title} />
                </td>
                <th className="book-title">{book.title}</th>
                <td className="has-text-center">{book.quantity}</td>

                <td className="has-text-center">
                  {book.price}
                  <span>€</span>
                </td>

                <td>
                  {book.price * book.quantity}
                  <span>€</span>
                </td>
                <td>
                  <button onClick={() => onDelete(book.isbn)}>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Cart;
