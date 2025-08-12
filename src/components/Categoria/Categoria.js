import React, { useState } from 'react';
import Produtos from '../Produtos/Produtos'; // plural
import './Categoria.css';

function Categoria({ nome, produtos }) {
  const [aberto, setAberto] = useState(true);

  return (
    <div className="categoria-card">
      <h2 onClick={() => setAberto(!aberto)}>
        {nome}
      </h2>
      {aberto && (
        produtos.length > 0 ? (
          <div className="product-list">
            {produtos.map(produto => (
              <Produtos key={produto.id} {...produto} /> // plural
            ))}
          </div>
        ) : (
          <p style={{ fontStyle: 'italic', color: '#888' }}>
            Sem produtos disponíveis.
          </p>
        )
      )}
    </div>
  );
}

export default Categoria;
