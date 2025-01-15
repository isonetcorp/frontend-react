import React from 'react';

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockChange }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Buscar..."
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockChange(e.target.checked)}
        />
        {' '}
        Solo se muestra prodcutos en Stock
      </p>
    </form>
  );
}

export default SearchBar;
