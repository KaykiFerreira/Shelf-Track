import React from 'react';
import './Produtos.css';

function Produto({ nome, estoque, status, vencimento, peso }) {
  return (
    <div className="product-card">
      <div className="product-icon">🥜</div>
      <h3 className="product-name">{nome}</h3>
      <p className="product-stock">{estoque} lotes em estoque</p>
      <p className={`product-status status-${status}`}>
        {status === 'vermelho' ? 'Lote vencido' : `Vence em ${vencimento}`}
      </p>
      <p className="product-weight">{peso} kg</p>
    </div>  
  );
}

export default Produto;
