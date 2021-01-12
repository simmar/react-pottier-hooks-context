import React, {createContext, useCallback, useState} from 'react';

export const CaddyContext = createContext();

const Context = (props) => {
  const [search, setSearch] = useState('');
  const [caddy, setCaddy] = useState([]);
  const [count, setCount] = useState(0);

  const updateCaddyItems = useCallback((items) => {
    setCaddy([...caddy, items]);
  });

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
      }}
    >
      {props.children}
    </CaddyContext.Provider>
  );
};

export default Context;
