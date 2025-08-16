import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch, onDateFilter }) {
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");

  // Busca automática ao digitar
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  // Busca por data só ao clicar no botão
  const handleFilter = () => {
    if (onDateFilter) onDateFilter(date);
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <span className="search-icon">
          <svg width="20" height="20" fill="#bdbdbd" viewBox="0 0 24 24">
            <path d="M21 20.3l-5.6-5.6c1.2-1.5 1.9-3.3 1.9-5.2C17.3 5.6 13.7 2 9.7 2S2 5.6 2 9.7s3.6 7.7 7.7 7.7c1.9 0 3.7-0.7 5.2-1.9l5.6 5.6c0.4 0.4 1 0.4 1.4 0s0.4-1 0-1.4zM4 9.7c0-3.1 2.5-5.7 5.7-5.7s5.7 2.5 5.7 5.7-2.5 5.7-5.7 5.7S4 12.8 4 9.7z"/>
          </svg>
        </span>
        <input
          type="text"
          placeholder="Buscar por categoria ou nome do produto..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="date-input"
      />
      <button onClick={handleFilter}>Filtrar</button>
    </div>
  );
}