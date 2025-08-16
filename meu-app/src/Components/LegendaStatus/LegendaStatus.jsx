import React from "react";
import "./LegendaStatus.css";

export default function LegendaStatus() {
  return (
    <div className="legend-container">
      <div className="legend-item">
        <span className="legend-icon green">✔</span>
        <span>Vence em mais de 6 meses</span>
      </div>
      <div className="legend-item">
        <span className="legend-icon yellow">⚠</span>
        <span>Vence em menos de 6 meses</span>
      </div>
      <div className="legend-item">
        <span className="legend-icon red">✖</span>
        <span>Lote vencido</span>
      </div>
    </div>
  );
}
