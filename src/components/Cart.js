import axios from 'axios';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {APIURL, CaddyContext} from '../Context';

const Cart = (props) => {
  const {
    caddy,
    count,
    setCount,
    updateCaddyItems,
    updateCartItemsCount,
  } = useContext(CaddyContext);

  const [totalPrice, SetTotalPrice] = useState(0);
  const [reduction, setReduction] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const getReduction = useCallback(
    (offer) => {
      switch (offer.type) {
        case 'percentage': {
          return subTotal * (offer.value / 100);
        }
        case 'minus': {
          return offer.value;
        }
        case 'slice': {
          const nbSlice = Math.floor(subTotal / offer.sliceValue);
          return nbSlice * offer.value;
        }
        default: {
          return;
        }
      }
    },
    [subTotal]
  );
  const getBestReduction = useCallback(
    (commercialOffers) => {
      return commercialOffers
        .map((offer) => ({offer, amount: getReduction(offer)}))
        .sort((a, b) => (a.amount < b.amount ? 1 : -1))[0];
    },
    [getReduction]
  );
  const updateTotalPrice = useCallback(() => {
    if (caddy && caddy.length >= 0) {
      const productsIsbns = caddy.map((item) => item.isbn);
      const apiPath = `${APIURL}/books/${productsIsbns.join(
        ','
      )}/commercialOffers`;
      axios
        .get(apiPath)
        .then((response) => {
          const dataOffers = response.data.offers;
          const bestOffer = getBestReduction(dataOffers);
          setReduction(bestOffer.amount);
          const totalPrice = caddy.reduce(
            (value, item) => value + item.quantity * item.price,
            0
          );
          SetTotalPrice(totalPrice);
          setSubTotal(totalPrice);
          setCartTotal(totalPrice - reduction);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setReduction(0);
      setSubTotal(0);
      setCartTotal(0);
    }
    localStorage.setItem('caddy', JSON.stringify(caddy));
  }, [caddy, getBestReduction, reduction]);

  const changeQuantity = useCallback((product, number) => {
    product.quantity += number;

    const bookInCart = caddy.find((item) => item.isbn === product.isbn);

    if (bookInCart) {
      updateTotalPrice();
      updateCartItemsCount();
    }
  }, []);

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
                <th className="has-text-centered is-danger">
                  <p className="is-danger">-{reduction.toFixed(2)}€</p>
                </th>
                <th className="has-text-centered" />
              </tr>
              <tr>
                <th />
                <th />
                <th />
                <th className="has-text-centered">Total after reduction</th>
                <th className="has-text-centered">{cartTotal.toFixed(2)}€</th>
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
                    <td className="has-text-center">
                      <button
                        className="btn"
                        disabled={book.quantity < 2}
                        onClick={(e) => changeQuantity(book, -1)}
                      >
                        -
                      </button>
                      {book.quantity}
                      <button
                        className="btn"
                        onClick={(e) => changeQuantity(book, 1)}
                      >
                        +
                      </button>
                    </td>

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
        <p>
          Votre panier est vide ! Retourner à la page
          <Link to="/booklist">
            <span className="is-size-4"> produits</span>
          </Link>
        </p>
      )}
    </section>
  );
};

export default Cart;
