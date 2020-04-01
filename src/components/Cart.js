import React, {useContext} from 'react';
import Context from '../Context';

const Cart = () => {
  const context = useContext (Context);
  const caddy = context.caddy;

  console.log (caddy, 'cart caddy');
  console.log (context, 'context');

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
            <th className="has-text-centered">
              Total
            </th>
            <th className="has-text-centered">
              €{' '}
            </th>
            <th className="has-text-centered" />
          </tr>
          <tr>
            <th />
            <th />
            <th />
            <th className="has-text-centered">
              Reduction
            </th>
            <th className="has-text-centered">
              €
            </th>
            <th className="has-text-centered" />
          </tr>
          <tr>
            <th />
            <th />
            <th />
            <th className="has-text-centered">
              Total after reduction
            </th>
            <th className="has-text-centered">
              €
            </th>
            <th className="has-text-centered" />
          </tr>
        </tfoot>

        <tbody>
          {caddy.map ((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <img src={item.cover} alt={item.title} />
                </td>
                <th className="book-title">
                  {item.title}
                </th>
                <td className="has-text-center">{item.quantity}</td>

                <td className="has-text-center" />
                <td> {item.price}<span>€</span></td>
                <td>
                  <span>€</span>
                </td>
                <td>
                  <button>
                    delete
                  </button>
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
