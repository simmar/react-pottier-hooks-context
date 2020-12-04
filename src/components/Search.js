import React, {useContext} from 'react';
import Context from '../Context';

const Search = () => {
  const context = useContext(Context);

  return (
    <form className="field columns">
      <div className="column control has-icons-left is-half ">
        <input
          className="input"
          type="text"
          placeholder="Search your books"
          onChange={(event) => {
            context.setSearch(event.target.value);
          }}
        />
      </div>
    </form>
  );
};

export default Search;
