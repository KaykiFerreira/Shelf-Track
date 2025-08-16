import React from "react";
import "./ProductCard.css";

export default function ProductCard({ nome, lotes, validade, peso, status, icone, onClick }) {
  return (
    <div className="product-card" onClick={onClick} style={{cursor:"pointer"}}>
      <img src={icone} alt={nome} className="product-icon" />
      <h3>{nome}</h3>
      <p>{lotes} lotes em estoque</p>
      <span className={`product-status ${status}`}>
        {status === "ok" && "✔️"}
        {status === "alerta" && "⚠️"}
        {status === "vencido" && "❌"}
      </span>
      <div className="product-validade">{validade}</div>
      <div className="product-peso">{peso} kg</div>
    </div>
  );
}
