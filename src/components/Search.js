import React, {useContext} from 'react';
import {CaddyContext} from '../Context';

const Search = () => {
  const {search, setSearch} = useContext(CaddyContext);

  return (
    <form className="field columns">
      <div className="column control has-icons-left is-half ">
        <input
          className="input"
          type="text"
          placeholder="Chercher"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
      </div>
    </form>
  );
};

export default Search;
