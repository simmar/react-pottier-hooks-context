import React, {createContext, useState} from 'react';

export const CaddyContext = createContext();

const Context = (props) => {
  const [search, setSearch] = useState('');
  const [caddy, setCaddy] = useState([]);
  const [totalPrice, SetTotal] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <CaddyContext.Provider
      value={{
        search,
        setSearch,
        caddy,
        setCaddy,
        totalPrice,
        SetTotal,
        count,
        setCount,
      }}
    >
      {props.children}
    </CaddyContext.Provider>
  );
};

export default Context;
