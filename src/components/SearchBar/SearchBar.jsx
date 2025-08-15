import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [valor, setValor] = useState("");

  const handleChange = (e) => {
    setValor(e.target.value);
    onSearch(e.target.value); // envia o texto para EstoquePage
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar produto..."
        value={valor}
        onChange={handleChange}
      />
      <button onClick={() => onSearch(document.querySelector('.search-container input').value)}>Buscar</button>
    </div>
  );
}
