import React, {createContext, useCallback, useState} from 'react';

export const CaddyContext = createContext();
export const APIURL = 'https://henri-potier-proxy.herokuapp.com';

const Context = (props) => {
  const [search, setSearch] = useState('');
  const [caddy, setCaddy] = useState([]);
  const [count, setCount] = useState(0);

  const updateCaddyItems = useCallback(() => {
    setCaddy([...caddy]);
  });

  const updateCartItemsCount = useCallback(() => {
    const count = caddy.reduce((value, item) => value + item.quantity, 0);
    setCount(count);
  }, [caddy]);

  return (
    <CaddyContext.Provider
      value={{
        search,
        setSearch,
        caddy,
        setCaddy,
        count,
        setCount,
        updateCaddyItems,
        updateCartItemsCount,
      }}
    >
      {props.children}
    </CaddyContext.Provider>
  );
};

export default Context;
