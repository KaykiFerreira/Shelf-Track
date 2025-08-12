import React from 'react';
import './SearchFilter.css';

function SearchFilter({ busca, setBusca, dataFiltro, setDataFiltro }) {
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Buscar por categoria ou nome do produto..."
        value={busca}
        onChange={e => setBusca(e.target.value)}
        className="input-text"
      />
      <input
        type="date"
        value={dataFiltro}
        onChange={e => setDataFiltro(e.target.value)}
        className="input-date"
      />
      <button className="filter-button">Filtrar</button>
    </div>
  );
}

export default SearchFilter;
