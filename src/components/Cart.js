import React, {useCallback, useContext, useEffect, useState} from 'react';
import {CaddyContext} from '../Context';

const Cart = (props) => {
  const {caddy, count, updateCaddyItems, setCount} = useContext(CaddyContext);
  const [totalPrice, SetTotalPrice] = useState();

  const updateTotalPrice = () => {
    if (caddy && caddy.length >= 0) {
      const totalPrice = caddy.reduce(
        (value, item) => value + item.quantity * item.price,
        0
      );
      SetTotalPrice(totalPrice);
    }
  };

  const deleteItemFromCart = useCallback(
    (isbn) => {
      const bookInCart = caddy.find((item) => item.isbn === isbn);

      if (bookInCart) {
        let cartList = caddy;
        cartList.splice(caddy.indexOf(bookInCart), 1);
        updateTotalPrice();
        setCount(count - bookInCart.quantity);
      }
    },
    [caddy, updateCaddyItems]
  );

  useEffect(() => {
    updateTotalPrice();
  }, [updateTotalPrice]);

  return (
    <section className="section">
      {caddy && caddy.length > 0 ? (
        <>
          <h1 className="title">Votre panier contient {count} éléments</h1>
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
                  {totalPrice} <span>€</span>
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
                      <button onClick={() => deleteItemFromCart(book.isbn)}>
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <p>Votre panier est vide !</p>
      )}
    </section>
  );
};

export default Cart;
